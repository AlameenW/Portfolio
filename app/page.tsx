"use client";

import Image from "next/image";
import { title } from "process";
import { useEffect, useState } from "react";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Projects from "./pages/Projects";
import icons from "./icons";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "projects", "blogs", "contact"];
  const { TwitterIcon, GithubIcon, LinkedinIcon } = icons;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let current = "home";
      for (const sectionId of sections) {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl && window.scrollY >= sectionEl.offsetTop - 100) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "blogs", title: "Blogs" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="bg-black text-white font-sans selection:bg-yellow-400/30">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-yellow-400">
            AA
          </a>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`capitalize text-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-yellow-400 font-bold"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
          </div>
        </nav>
      </header>

      <main>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
      </main>

      <footer className="py-8 border-t border-yellow-400/10">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/AlameenW"
              className="hover:text-yellow-400 transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/alameen-adeku-2507492b6/"
              className="hover:text-yellow-400 transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <TwitterIcon />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Alameen Adeku. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
