export const ReviewCard = ({ name, imgUrl, buyerType, review, className }) => {
  return (
    <div
      className={`bg-indigo-400 rounded-lg text-gray-100 px-8 pt-10 pb-8
        lg:w-[350px] lg:min-h-[250px] xl:h-auto ${className}`}
    >
      <div className="flex gap-6 mb-6">
        <img src={imgUrl} className="size-10 rounded-full" />

        <div className="text-[1.0625rem] leading-[1.2rem]">
          <p className="font-bold">{name}</p>
          <p className="text-black">{buyerType}</p>
        </div>
      </div>

      <p className="font-bold text-pretty text-sm lg:text-[15px]">{review}</p>
    </div>
  );
};
