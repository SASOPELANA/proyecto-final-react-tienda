export const ReviewCard = ({ name, imgUrl, buyerType, review, className }) => {
  return (
    <div
      className={`bg-gray-600 rounded-lg text-gray-200 px-8 pt-10 pb-8
        xl:w-[350px] xl:h-[234px] ${className}`}
    >
      <div className="flex gap-6 mb-6">
        <img src={imgUrl} className="size-10 rounded-full" />

        <div className="text-[1.0625rem] leading-[1.2rem]">
          <p className="font-bold">{name}</p>
          <p className="text-amber-300">{buyerType}</p>
        </div>
      </div>

      <p className="font-medium text-pretty xl:text-[15px]">{review}</p>
    </div>
  );
};
