"use client";

import { useRef, useState } from "react";
import {
  PHOTO_TYPE_LABELS,
  PHOTO_TYPES,
  type JarvisLeadPhoto,
  type PhotoType,
} from "@/lib/jarvis-types";

type LeadPhotoGridProps = {
  leadId: string;
  photos: JarvisLeadPhoto[];
  onUpdated: () => void;
};

export function LeadPhotoGrid({ leadId, photos, onUpdated }: LeadPhotoGridProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("photo_type", "general");

      const response = await fetch(`/api/jarvis/leads/${leadId}/photos/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      onUpdated();
    } catch {
      setError("Could not upload photo.");
    } finally {
      setIsUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function handleDelete(photoId: string) {
    const response = await fetch(
      `/api/jarvis/leads/${leadId}/photos/${photoId}/`,
      { method: "DELETE" }
    );
    if (response.ok) onUpdated();
  }

  async function handlePhotoTypeChange(photoId: string, photoType: PhotoType) {
    await fetch(`/api/jarvis/leads/${leadId}/photos/${photoId}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ photo_type: photoType }),
    });
    onUpdated();
  }

  return (
    <section>
      <div className="jarvis-photo-actions">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="jarvis-photo-input"
          onChange={handleUpload}
        />
        <button
          type="button"
          className="jarvis-button jarvis-button-secondary"
          disabled={isUploading}
          onClick={() => inputRef.current?.click()}
        >
          {isUploading ? "Uploading..." : "Upload photo"}
        </button>
      </div>

      {error ? <p className="jarvis-error">{error}</p> : null}

      {photos.length === 0 ? (
        <p className="jarvis-muted">No photos yet.</p>
      ) : (
        <div className="jarvis-photo-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="jarvis-photo-item">
              <button
                type="button"
                className="jarvis-photo-thumb"
                onClick={() => setLightbox(photo.storage_path)}
              >
                <img src={photo.storage_path} alt={photo.caption ?? "Lead photo"} />
              </button>
              <select
                className="jarvis-select"
                value={photo.photo_type}
                onChange={(event) =>
                  handlePhotoTypeChange(photo.id, event.target.value as PhotoType)
                }
              >
                {PHOTO_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {PHOTO_TYPE_LABELS[type]}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="jarvis-button jarvis-button-ghost"
                onClick={() => handleDelete(photo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {lightbox ? (
        <div className="jarvis-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Lead photo enlarged" />
        </div>
      ) : null}
    </section>
  );
}
