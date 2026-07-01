import { v2 as cloudinary } from "cloudinary";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getCloudinary() {
  cloudinary.config({
    cloud_name: requireEnv("CLOUDINARY_CLOUD_NAME"),
    api_key: requireEnv("CLOUDINARY_API_KEY"),
    api_secret: requireEnv("CLOUDINARY_API_SECRET"),
  });
  return cloudinary;
}

export async function uploadLeadPhotoToCloudinary(file: File, leadId: string) {
  const client = getCloudinary();
  const bytes = Buffer.from(await file.arrayBuffer());

  const result = await new Promise<{
    secure_url: string;
    public_id: string;
    bytes: number;
    format?: string;
  }>((resolve, reject) => {
    const upload = client.uploader.upload_stream(
      {
        folder: `jarvis-lead-photos/${leadId}`,
        resource_type: "image",
      },
      (error, uploadResult) => {
        if (error || !uploadResult) {
          reject(error ?? new Error("Cloudinary upload failed"));
          return;
        }
        resolve({
          secure_url: uploadResult.secure_url,
          public_id: uploadResult.public_id,
          bytes: uploadResult.bytes,
          format: uploadResult.format,
        });
      }
    );
    upload.end(bytes);
  });

  return result;
}

export async function deleteLeadPhotoFromCloudinary(publicIdOrUrl: string) {
  const client = getCloudinary();
  const publicId = publicIdOrUrl.includes("cloudinary.com")
    ? publicIdOrUrl.split("/upload/")[1]?.replace(/^v\d+\//, "").replace(/\.[^.]+$/, "") ?? publicIdOrUrl
    : publicIdOrUrl;

  try {
    await client.uploader.destroy(publicId, { resource_type: "image" });
  } catch {
    // Photo may already be removed; don't block DB delete
  }
}
