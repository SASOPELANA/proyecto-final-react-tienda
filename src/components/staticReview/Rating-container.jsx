import { RatingCard } from "./Rating-card.jsx";

const ratings = [
  " Calificado con 5 estrellas en las reseñas.",
  " Valorado con 5 estrellas en las opiniones.",
  " Con una calificación de 5 estrellas.",
];

export const RatingContainer = () => {
  const positionClases = [
    "xl:place-self-start",
    "xl:place-self-center",
    "xl:place-self-end",
  ];

  return (
    <section className="flex flex-col gap-4 xl:w-[540px] xl:justify-center">
      {ratings.map((rating, index) => {
        return (
          <RatingCard
            key={rating}
            text={rating}
            className={positionClases[index]}
          />
        );
      })}
    </section>
  );
};
