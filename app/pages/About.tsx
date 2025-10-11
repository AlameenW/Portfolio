import GlowCard from "../components/GlowCard";
import Section from "../components/Section";
import Image from "next/image";
const About = () => {
        const skills = [
          {
            category: "Frontend",
            items: [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Vanilla JS",
            ],
          },
          {
            category: "Backend",
            items: ["Node.js", "Express", "Python", "Supabase", "PostgreSQL"],
          },
          {
            category: "Tools",
            items: ["Git & GitHub", "Docker", "Figma", "Vercel", "Jest"],
          },
        ];
    return (
      <Section id="about">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About <span className="text-yellow-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="w-full h-100 bg-gray-900 rounded-xl border-2 border-yellow-400/30 flex items-start justify-center overflow-hidden">
              <img
                src="/headshot.jpeg"
                alt="Alameen Adeku"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg mb-6">
              Hello! I'm Alameen, a passionate software developer with a knack
              for creating elegant solutions in the least amount of time. I have
              a strong foundation in modern web technologies and a love for
              continuous learning.
            </p>
            <p className="text-gray-300 text-lg">
              My journey in tech started with a simple "Hello World" and has
              since grown into a full-fledged passion for building scalable and
              user-friendly applications. I thrive in collaborative environments
              and I'm always looking for new challenges.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            My <span className="text-yellow-400">Skillset</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <GlowCard key={skillGroup.category}>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </Section>
    );
}

export default About;