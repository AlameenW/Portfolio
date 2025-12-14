import GlowCard from "../components/GlowCard";
import Section from "../components/Section";
import Image from "next/image";
const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vanilla JS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Supabase", "PostgreSQL", ".NET"],
    },
    {
      category: "Data Science",
      items: ["Python", "Pandas", "Matplotlib", "NumPy", "Scikit-learn"],
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
            <Image
              src="/headshot.jpeg"
              alt="Alameen Adeku"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-gray-300 text-lg mb-6">
            Hello! I&apos;m Alameen, a Computer Science junior at Southeastern
            Louisiana University. As a passionate software developer, I
            specialize in creating websites with beautiful, modern, and
            user-friendly designs. Recently, I&apos;ve been diving into Data
            Mining, Neural Networks, and Artificial Intelligence, with the goal
            of integrating AI technologies to build more intelligent and
            powerful software solutions.
          </p>
          <p className="text-gray-300 text-lg">
            I bring a solid foundation in modern web technologies paired with a
            genuine passion for continuous learning. I flourish in collaborative
            environments and am always excited to learn new technologies to
            improve my skills.
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
};

export default About;
