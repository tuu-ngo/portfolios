import { awards } from "@/data/content";

export default function Awards() {
  return (
    <section className="section container" id="awards">
      <span className="eyebrow reveal">Awards & Certifications</span>
      <div className="awards">
        {awards.map((a, i) => (
          <article className="awards__card reveal" key={i}>
            <div className="awards__kind">{a.kind}</div>
            <h3 className="awards__title">{a.title}</h3>
            <div className="awards__meta">{a.meta}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
