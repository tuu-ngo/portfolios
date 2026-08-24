import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <span className="eyebrow reveal">Tech Stack</span>
      <div className="skills">
        {skills.map((group, i) => (
          <article className="skills__card reveal" key={i}>
            <h3 className="skills__title">{group.title}</h3>
            <div className="skills__tags">
              {group.items.map((it, j) => (
                <span className="tag" key={j}>
                  {it}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
