// Ticker band. Renders the word list twice so the GSAP loop is seamless.
export default function Marquee({ items, variant = "", speed = 1, reverse = false }) {
  const cls = ["marquee", variant === "fill" && "marquee--fill", variant === "yellow" && "marquee--yellow"]
    .filter(Boolean)
    .join(" ");

  const group = (
    <span className="marquee__group" aria-hidden={false}>
      {items.map((word, i) => (
        <span className="marquee__item" key={i}>
          <span className="marquee__word">{word}</span>
          <span className="star">★</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={cls}>
      <div className="marquee__track" data-speed={speed} data-reverse={reverse ? "1" : "0"}>
        {group}
        {group}
      </div>
    </div>
  );
}
