import Image from "next/image";
import { about, education } from "@/data/content";

export default function About() {
  return (
    <section className="section container" id="about">
      <span className="eyebrow reveal">About Me</span>

      <div className="about__grid">
        {about.photo && (
          <figure className="about__photo reveal">
            <Image
              src={about.photo}
              alt={about.photoAlt || "Portrait"}
              width={900}
              height={600}
              priority
            />
          </figure>
        )}
        <div className="about__text">
          <p className="about__intro reveal">{about.intro}</p>
          {about.paragraph && <p className="about__body reveal">{about.paragraph}</p>}
        </div>
      </div>

      <div className="edu">
        {education.map((e, i) => (
          <article className="edu__card reveal" key={i}>
            <div>
              <div className="edu__period">{e.period}</div>
              <h3 className="edu__school">
                <span className="edu__icon">{e.icon}</span> {e.school}
              </h3>
              <div className="edu__degree">{e.degree}</div>
              {e.note && <div className="edu__note">{e.note}</div>}
              {e.location && <div className="edu__loc">{e.location}</div>}
            </div>
            <div className="edu__stats">
              {e.stats.map((s, j) => (
                <div className="edu__stat" key={j}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
