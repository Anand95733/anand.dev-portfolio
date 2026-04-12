const SingleSkill = ({ imgSvg, text, hoverClass }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 p-6 border border-lightBrown hover:border-cyan transition-all duration-300 rounded-2xl bg-black/20 hover:bg-black w-[150px] h-[150px]">
      <div className={`text-5xl text-orange ${hoverClass} transition-all duration-300 group-hover:-translate-y-2`}>
        {imgSvg}
      </div>
      <p className="text-white font-bold text-sm tracking-widest">{text}</p>
    </div>
  );
};

export default SingleSkill;
