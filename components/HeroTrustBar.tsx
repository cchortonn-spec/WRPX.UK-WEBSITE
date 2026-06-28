export function HeroTrustBar() {
  return (
    <section className="hero-trust-bar" aria-label="Why choose WRPX">
      <div className="hero-trust-bar-inner">
        <div className="hero-trust-item">
          <div className="hero-trust-icon" aria-hidden="true">
            <StarIcon />
          </div>
          <div>
            <h2 className="hero-trust-title">5-Star Rated</h2>
            <p className="hero-trust-text">
              Hundreds of happy customers across South Yorkshire.
            </p>
            <div className="hero-trust-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} filled />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-trust-item">
          <div className="hero-trust-icon" aria-hidden="true">
            <ShieldIcon />
          </div>
          <div>
            <h2 className="hero-trust-title">Fully Insured</h2>
            <p className="hero-trust-text">
              Work carried out by fully insured professionals for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22l1.2-7.86-5-4.87 7.1-1.01L12 2z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
