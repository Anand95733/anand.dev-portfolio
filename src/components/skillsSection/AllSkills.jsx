import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    hoverClass: "group-hover:text-[#E34F26]",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    hoverClass: "group-hover:text-[#F7DF1E]",
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    hoverClass: "group-hover:text-[#3178C6]",
  },
  {
    skill: "React",
    icon: FaReact,
    hoverClass: "group-hover:text-[#61DAFB]",
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
    hoverClass: "group-hover:text-white",
  },
  {
    skill: "Angular",
    icon: SiAngular,
    hoverClass: "group-hover:text-[#DD0031]",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    hoverClass: "group-hover:text-[#06B6D4]",
  },
  {
    skill: "Python",
    icon: FaPython,
    hoverClass: "group-hover:text-[#3776AB]",
  },
  {
    skill: "Node.js",
    icon: FaNode,
    hoverClass: "group-hover:text-[#339933]",
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
    hoverClass: "group-hover:text-[#009688]",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    hoverClass: "group-hover:text-[#47A248]",
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
    hoverClass: "group-hover:text-[#4169E1]",
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-[1200px] mx-auto mt-16 justify-items-center">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
                hoverClass={item.hoverClass}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
