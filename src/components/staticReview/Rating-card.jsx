import starImg from "../../assets/estrella.png";

export const RatingCard = ({ text, className }) => {
  return (
    <div
      className={`bg-indigo-500/60 rounded-lg p-4 xl:flex xl:w-[445px] xl:justify-between
      xl:gap-8 xl:items-center ${className}`}
    >
      <div className="flex gap-2 place-content-center mb-4 xl:mb-0">
        <img className="size-5" src={starImg} alt="Icon Star" />
        <img className="size-5" src={starImg} alt="Icon Star " />
        <img className="size-5" src={starImg} alt="Icon Star " />
        <img className="size-5" src={starImg} alt="Icon Star " />
        <img className="size-5" src={starImg} alt="Icon Star " />
      </div>

      <p className="text-center text-[17px] text-white font-bold">{text}</p>
    </div>
  );
};
