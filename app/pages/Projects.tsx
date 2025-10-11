import GlowCard from "../components/GlowCard";
import Section from "../components/Section";
import icons from "../icons";
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce site with features like product search, cart, and Stripe integration.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "#",
      repo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "The very portfolio you're looking at, designed to be modern, sleek, and responsive.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      link: "#",
      repo: "#",
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Framer Motion"],
      link: "#",
      repo: "#",
    },
  ];
  const { GithubIcon, ExternalLinkIcon } = icons;
  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My <span className="text-yellow-400">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <GlowCard key={index} className="flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-auto pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors flex items-center gap-2"
              >
                Live Demo <ExternalLinkIcon />
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <GithubIcon />
              </a>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
