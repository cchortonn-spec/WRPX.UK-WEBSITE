import { googleReviews } from "@/lib/google-reviews";

function StarIcon({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22l1.2-7.86-5-4.87 7.1-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function GoogleGIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function GoogleReviewsBar() {
  const { profileUrl, rating, reviewCount, reviews } = googleReviews;
  const scoreLabel = Number.isInteger(rating) ? `${rating}.0` : String(rating);

  return (
    <section className="google-reviews-section reveal" aria-label="Google reviews">
      <div className="google-reviews-panel">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="google-reviews-status"
        >
          <span className="google-reviews-g">
            <GoogleGIcon />
          </span>
          <div className="google-reviews-meta">
            <p className="google-reviews-label">Google reviews</p>
            <div className="google-reviews-score-row">
              <span className="google-reviews-score">{scoreLabel}</span>
              <span
                className="google-reviews-stars"
                aria-label={`${scoreLabel} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </span>
              {reviewCount != null && (
                <span className="google-reviews-count">
                  Based on {reviewCount} review{reviewCount === 1 ? "" : "s"}
                </span>
              )}
            </div>
          </div>
          <span className="google-reviews-cta">
            See all reviews <span aria-hidden="true">→</span>
          </span>
        </a>

        <div className="google-reviews-chips">
          {reviews.map((review) => (
            <a
              key={review.name}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-reviews-chip"
            >
              <div className="google-reviews-chip-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="google-reviews-chip-quote">&ldquo;{review.quote}&rdquo;</p>
              <p className="google-reviews-chip-author">— {review.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
