"use client";

import { useEffect, useRef } from "react";
import Hero from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Resume from "@/sections/Resume";
import Certificates from "@/sections/Certificates";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;

      const sections = Array.from(el.querySelectorAll("section"));
      const current = Math.round(el.scrollTop / window.innerHeight);
      const next = e.deltaY > 0
        ? Math.min(current + 1, sections.length - 1)
        : Math.max(current - 1, 0);

      el.scrollTo({
        top: next * window.innerHeight,
        behavior: "smooth",
      });

      setTimeout(() => { isScrolling = false; }, 1500);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main
      ref={mainRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <section id="home"><Hero /></section>
      <section id="resume"><Resume /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}