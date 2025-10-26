"use client";

import Image from "next/image";
import { title } from "process";
import { useEffect, useState } from "react";
import Intro from "./pages/Intro";
import About from "./pages/About";
import icons from "./icons";
import Contact from "./pages/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "projects", "blogs", "contact"];
  const { TwitterIcon, GithubIcon, LinkedinIcon, EmailIcon } = icons;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          {/* Desktop navigation */}
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
          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      <main>
        <Intro/>
        <About/>
        <FeaturedProjects/>
        <Contact/>
      </main>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-blackzno z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-bold text-yellow-400">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-yellow-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeSection === link.id
                          ? "text-yellow-400 bg-yellow-400/10 font-bold"
                          : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

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
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              <EmailIcon />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Alameen Adeku. All Rights
            Reserved. Built with Next JS & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
