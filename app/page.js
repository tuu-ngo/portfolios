import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import GsapInit from "@/components/GsapInit";
import { marquees } from "@/data/content";

export default function Home() {
  return (
    <main>
      <GsapInit />
      <Navbar />
      <Hero />
      <Marquee items={marquees.about} variant="fill" speed={1} />
      <About />
      <Experience />
      <Skills />
      <Marquee items={marquees.awards} variant="yellow" speed={1.2} reverse />
      <Awards />
      <Marquee items={marquees.projects} variant="fill" speed={1} />
      <Projects />
      <Contact />
    </main>
  );
}
