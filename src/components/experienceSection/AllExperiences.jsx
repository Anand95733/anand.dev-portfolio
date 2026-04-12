import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Python (AI/ML) Intern",
    company: "Groovi Techno IT Solutions Pvt Ltd",
    date: "Aug 2022 - Nov 2022",
    responsibilities: [
      "Trained and evaluated 4+ supervised ML models on real-world datasets",
      "Improved model accuracy by 12% through feature engineering",
      "Implemented hyperparameter tuning and data preprocessing pipelines in Python",
      "Worked with NumPy and various ML algorithms",
      "Cleaned and normalized large datasets to optimize model training efficiency",
      "Documented model architecture and training procedures for future team reference",
    ],
  },
  {
    job: "Full Stack Developer",
    company: "Ascription Technologies Private Limited",
    date: "Jun 2025 - Feb 2026",
    responsibilities: [
      "Spearheaded cross-platform Android and iOS app development using React Native",
      "Engineered a Next.js analytics dashboard visualizing real-time user activity across 5+ KPI modules",
      "Streamlined API performance by 35% by architecting FastAPI services",
      "Reduced codebase duplication by 70% compared to native builds",
    ],
  },
  {
    job: "Open Source Contributor",
    company: "SC-Corporation AI Module",
    date: "2024",
    responsibilities: [
      "Contributed to biometric muzzle-print livestock identification system",
      "Reduced manual tracking effort by 80%",
      "Worked on AI-powered identification algorithms",
      "Collaborated with team on production-grade AI solutions",
      "Assisted in integrating computer vision models with the backend infrastructure",
      "Conducted extensive testing to ensure high accuracy in real-world environments",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-stretch justify-between w-full">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="self-center mt-12"
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
