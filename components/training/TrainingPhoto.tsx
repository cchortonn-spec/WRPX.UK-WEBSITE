import Image from "next/image";

type TrainingPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

/** Full-width photo break used between hub sections */
export function TrainingPhoto({
  src,
  alt,
  caption,
  priority = false,
}: TrainingPhotoProps) {
  return (
    <figure className="training-photo">
      <div className="training-photo-frame">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
        />
      </div>
      {caption ? (
        <figcaption className="training-photo-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

type TrainingPhotoGridProps = {
  photos: ReadonlyArray<{ src: string; alt: string; label: string }>;
};

/** Three-up strip for the 5-day / on-the-job section */
export function TrainingPhotoGrid({ photos }: TrainingPhotoGridProps) {
  return (
    <div className="training-photo-grid">
      {photos.map((photo) => (
        <figure key={photo.src} className="training-photo-grid-item">
          <div className="training-photo-grid-frame">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <figcaption className="training-photo-caption">{photo.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
