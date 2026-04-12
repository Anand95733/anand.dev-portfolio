import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <div className="relative flex justify-center items-center">
        <img
          src="/images/profile.png"
          alt="Anand Ediga"
          className="max-h-[400px] w-[400px] object-cover rounded-full border-4 border-cyan shadow-[0_0_40px_rgba(34,211,238,0.3)] z-10"
        />
      </div>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
