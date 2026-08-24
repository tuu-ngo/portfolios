import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <span className="eyebrow reveal">Experience</span>
      <div className="exp">
        {experience.map((x, i) => (
          <article className="exp__card reveal" key={i}>
            <header className="exp__head">
              <div>
                <h3 className="exp__role">{x.role}</h3>
                <div className="exp__company">{x.company}</div>
              </div>
              <div className="exp__side">
                <div className="exp__period">{x.period}</div>
                {x.location && <div className="exp__loc">{x.location}</div>}
              </div>
            </header>
            <ul className="exp__points">
              {x.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
