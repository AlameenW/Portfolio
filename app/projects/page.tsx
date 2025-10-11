import GlowCard from "../components/GlowCard";
import icons from "../icons";
import { projectsData } from "../data/projects";

export default function ProjectsPage() {
  const { GithubIcon } = icons;

  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            All <span className="text-yellow-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here's a complete collection of projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <GlowCard key={project.id} className="flex flex-col">
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
              {/* Only GitHub link */}
              <div className="flex justify-center mt-auto pt-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <GithubIcon />
                  View Code
                </a>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-block bg-gray-800 text-yellow-400 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-gray-700 border border-yellow-400/30"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
