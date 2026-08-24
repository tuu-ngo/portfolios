import { site } from "@/data/content";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        {site.name}
      </a>
      <div className="nav__links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
