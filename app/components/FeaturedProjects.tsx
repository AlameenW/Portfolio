import GlowCard from "./GlowCard";
import Section from "./Section";
import icons from "../icons";
import { projectsData } from "../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .slice(0, 3);
  const { GithubIcon } = icons;

  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
         Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
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
            {/* Only GitHub link, no live demo */}
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

      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <a
          href="/projects"
          className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transform hover:scale-105"
        >
          View All Projects
        </a>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
