import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, github, description }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="flex-1">
        <h2 className="md:text-3xl sm:text-2xl text-orange mb-2">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special mb-3 sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        {description && (
          <p className={`text-sm text-lightGrey mb-4 sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}>
            {description}
          </p>
        )}
        <div className={`flex gap-4 items-center sm:justify-center ${
          align === "left" ? "md:justify-end" : "md:justify-start"
        }`}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            Live Demo <BsFillArrowUpRightCircleFill />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            >
              GitHub <FiGithub />
            </a>
          )}
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
