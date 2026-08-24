import { contact, site } from "@/data/content";

export default function Contact() {
  return (
    <>
      <section className="contact container" id="contact">
        <h2 className="contact__headline reveal">{contact.headline}</h2>
        <a className="contact__email reveal" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        {contact.phone && (
          <a className="contact__phone reveal" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            {contact.phone}
          </a>
        )}
        <div className="contact__socials reveal">
          {contact.socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </section>
      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Built with Next.js · GSAP</span>
      </footer>
    </>
  );
}
