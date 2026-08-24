import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <header className="hero container" id="top">
      {site.availability && (
        <span className="badge reveal">
          <span className="dot" />
          {site.availability}
        </span>
      )}

      <h1 className="hero__headline">
        {hero.headline.map((line, i) => (
          <span className="ln reveal" key={i}>
            {line}
          </span>
        ))}
      </h1>

      <div className="hero__row">
        <p className="hero__tagline reveal">{hero.tagline}</p>
        <div className="hero__ctas reveal">
          <a className="btn btn--fill" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className="btn" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <span className="hero__scroll">SCROLL ↓</span>
    </header>
  );
}
