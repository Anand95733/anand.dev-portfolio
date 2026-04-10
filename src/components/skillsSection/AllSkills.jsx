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
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "Angular",
    icon: SiAngular,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Node.js",
    icon: FaNode,
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
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
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
