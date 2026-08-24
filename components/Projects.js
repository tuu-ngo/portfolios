import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section className="section container" id="work">
      <span className="eyebrow reveal">Projects</span>
      <div className="proj">
        {projects.map((p, i) => (
          <article className="proj__card reveal" data-accent={p.accent} key={i}>
            <div className="proj__cat">{p.category}</div>
            <h3 className="proj__name">{p.name}</h3>
            <p className="proj__desc">{p.description}</p>
            {p.awards?.length > 0 && (
              <div className="proj__awards">
                {p.awards.map((a, j) => (
                  <span key={j}>{a}</span>
                ))}
              </div>
            )}
            <div className="proj__roles">
              {p.roles.map((r, j) => (
                <span className="tag" key={j}>
                  {r}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
