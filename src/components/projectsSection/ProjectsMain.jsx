import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AI Interview Simulator",
    year: "2025",
    align: "right",
    image: "/images/ai-interview-simulator.png",
    link: "https://ai-interview-simulator-app.pages.dev/",
    github: "https://github.com/Anand95733/Ai-interview-Simulator.git",
    description: "Full-stack AI-powered mock interview platform with real-time streaming, voice interaction, and session analytics across Cloudflare's global edge network (300+ locations).",
  },
  {
    name: "XOR - Collaborative Code Editor",
    year: "2024",
    align: "left",
    image: "/images/xor-code-editor.png",
    link: "https://xor-collaborative-code-editor.vercel.app/",
    github: "https://github.com/Anand95733/xor-collaborative-code-editor.git",
    description: "Production-grade collaborative coding platform supporting 10+ concurrent users with sub-100ms sync, live typing indicators, and in-browser execution across 5 languages.",
  },
  {
    name: "CreativeFlow AI",
    year: "2025",
    align: "right",
    image: "/images/creativeflow-ai.png",
    link: "https://pearmedia-ai-prototype-beta.vercel.app/",
    github: "https://github.com/Anand95733/pearmedia-ai-prototype.git",
    description: "AI-powered creative studio for prompt enhancement and image generation using React, Google Gemini 2.5, and Hugging Face. Features style analysis, preset filters, and image gallery.",
  },
  {
    name: "Sommarie-AI",
    year: "2024",
    align: "left",
    image: "/images/sommarie-ai.png",
    link: "https://sommarie-ai.vercel.app/",
    github: "https://github.com/Anand95733/sommarie-ai.git",
    description: "Full-stack web application that transforms PDFs into engaging, AI-powered summaries. Built with Next.js 15, OpenAI GPT-4o-mini, Google Gemini 1.5 Pro, and LangChain.",
  },
  {
    name: "AI Prompt Library",
    year: "2025",
    align: "right",
    image: "/images/ai-prompt-library.png",
    link: "https://ai-prompt-library-eta.vercel.app/prompts",
    github: "https://github.com/Anand95733/ai-prompt-library.git",
    description: "Production-grade full-stack prompt management platform built with Angular 19, Django 4.2, PostgreSQL, and Redis. Features glassmorphism UI, live view counters, complexity badges, and Swagger API docs.",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-6">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
            github={project.github}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
