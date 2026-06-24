"use client";

import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Resume from "@/sections/Resume";
import Certificates from "@/sections/Certificates";

export default function Home() {
  return (
    <main>
      <section id="about"><About /></section>
      <section id="resume"><Resume /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}