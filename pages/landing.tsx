import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Projects from "../components/projects/projects";
import STitle from "../components/skills-title/skills-title";
import Skils from "../components/skills/skills";
import ContactMe from "../components/contact-me/contact-me";
import WTText from "../components/lets-work-together-text/WTText";
import Footer from "../components/footer/footer";
import Link from "next/link";

const Landing: NextPage = () => {
  // const for paralax text effect on scroll
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset - screen.height);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    window.addEventListener("scroll", () => {
      faders.forEach((entry) => {
        var top = entry.getBoundingClientRect().top;

        if (top < window.innerHeight + 100) {
          entry.classList.add("appear");
        }

        // if (entry.isIntersecting) {
        //   console.log("opaaa ");
        //   entry.classList.add('appear');
        // }
      });
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // consts for fading in on scroll
  // const faders = document.querySelectorAll('.fade-in');
  // const appearOptions = [{
  //   threshold: 0,
  //   rootMargin: "150px"
  // }];

  // const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     } else {
  //       entry.target.classList.add('appear');
  //       appearOnScroll.unobserve(entry.target);
  //     }
  //   })
  // }, appearOptions);

  // faders.forEach(fader => {
  //   appearOnScroll.observe(fader);
  // });

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <ContactMe />

      <div className="intro-text">
        <h1>
          {"Hello World, I'm"}
          <br />
          <span id="myName">Albert-Andrei Moldovanu</span>
        </h1>

        <h3>
          {
            "I'm studying Software Engineering at VIA University College in Denmark. Looking for an internship, I created this portfolio in order to provide general information about myself and my skills."
          }
        </h3>

        <div className="intro-links">
          <a href="#projects">View Projects</a>
          <span style={{ marginLeft: "15px", marginRight: "15px" }}>or</span>
          <Link href="/about">Read About Me</Link>
        </div>
      </div>
      <div className="scroll-down">
        <div className="mouse"></div>
      </div>

      <div className="paralax-text">
        <h2 style={{ transform: `translateX(${offsetY * 0.5}px)` }}>
          Personal
        </h2>
        {/* <h2 style={{ left: offsetY * 0.5 + 'px' }}>Personal</h2> */}
        <h2 style={{ transform: `translateX(${-offsetY * 0.5}px)` }}>
          projects
        </h2>
      </div>
      <a hrefLang="projects" />
      <Projects />
      <STitle />
      <Skils />
      <WTText />
      <Footer />
    </div>
  );
};

export default Landing;
