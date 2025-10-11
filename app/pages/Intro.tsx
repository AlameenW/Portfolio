import Section from "../components/Section";
const Intro = () => {
    return (
      <Section id="home">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Alameen Adeku
          </h1>
          <p className="text-2xl md:text-4xl font-light text-yellow-400 mt-4 animate-pulse">
            Full Stack Engineer | AI & ML.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mt-8 text-lg">
            I love building full-scale web applications from concept to
            deployment. Currently diving deep into AI, machine learning, and
            neural networks.
          </p>
          <a
            href="#contact"
            className="mt-12 inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </Section>
    );
}

export default Intro;