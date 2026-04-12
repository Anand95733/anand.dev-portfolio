import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Anand Ediga, a Full Stack Developer with 8+ months of industry experience 
        and expertise in building production-grade applications. I'm proficient in modern 
        frontend and backend technologies, cloud deployment, and scalable system architecture. 
        I specialize in React.js, Next.js, Angular, FastAPI, and cloud platforms like Cloudflare 
        and Vercel. My passion lies in creating seamless user experiences, optimizing performance, 
        and integrating AI capabilities into web applications. I've successfully delivered 
        real-time collaborative platforms, AI-powered interview simulators, and streaming 
        applications with a focus on performance and user experience.
      </p>
      <br />
      <p>
        I hold a B.Tech in Computer Science Engineering from Sri Venkatesa Perumal 
        College of Engineering & Technology (2020 - 2024), where I built my foundational 
        knowledge before stepping into the industry.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
