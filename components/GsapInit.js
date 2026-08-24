"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapInit() {
  useEffect(() => {
    // Flag that JS is on so CSS hides .reveal until animated in.
    document.documentElement.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // --- Reveal on scroll ---
      if (!reduce) {
        gsap.utils.toArray(".reveal").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            onEnter: () => el.classList.add("is-in"),
            onLeaveBack: () => el.classList.remove("is-in"),
          });
        });
      } else {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      }

      // --- Marquee loops ---
      gsap.utils.toArray(".marquee__track").forEach((track) => {
        const reverse = track.dataset.reverse === "1";
        const speed = parseFloat(track.dataset.speed || "1");
        const distance = track.scrollWidth / 2; // one copy width
        const duration = distance / (60 * speed); // px per second baseline
        gsap.set(track, { x: reverse ? -distance : 0 });
        gsap.to(track, {
          x: reverse ? 0 : -distance,
          duration,
          ease: "none",
          repeat: -1,
        });
      });

      // --- Subtle parallax drift on project cards ---
      if (!reduce) {
        gsap.utils.toArray(".proj__card").forEach((card) => {
          gsap.fromTo(
            card,
            { y: 60 },
            {
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }
    });

    // Recalculate after web fonts settle to avoid marquee gaps.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return null;
}
