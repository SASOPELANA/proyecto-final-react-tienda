import { ReviewCard } from "./Review-card";
import JuanImg from "../../assets/juan-perez.webp";
import MariaImg from "../../assets/maria-garcia.webp";
import CarlosImg from "../../assets/carlos-rodrigues.webp";
import AnaImg from "../../assets/ana-martinez.webp";

const reviews = [
  {
    id: 1,
    name: "Juan Ignacio Perez",
    imgUrl: JuanImg,
    buyerType: "Usuario Verificado",
    review:
      "¡Excelente producto! Cumplió con las expectativas. Lo recomendaría sin dudar a cualquiera que esté buscando algo similar. Sin fallas, sin complicaciones 👍",
  },
  {
    id: 2,
    name: "María Angeles García",
    imgUrl: MariaImg,
    buyerType: "Usuario Verificado",
    review:
      "Muy satisfecho con la compra. El empaque también fue muy cuidado. Cumple su función. Definitivamente volvería a elegir este producto sin pensarlo. ⭐",
  },
  {
    id: 3,
    name: "Carlos Duran Rodríguez",
    imgUrl: CarlosImg,
    buyerType: "Usuario Verificado",
    review:
      "Superó mis expectativas. Es práctico, está hecho con materiales. Ideal para el uso diario. Desde que lo tengo, no tuve ningún problema. ¡Feliz con el resultado! 💯 ",
  },
  {
    id: 4,
    name: "Ana Tamara Martínez",
    imgUrl: AnaImg,
    buyerType: "Usuario Verificado",
    review:
      "Me encantó desde el primer momento. Es justo lo que necesitaba y se nota la dedicación en cada detalle. ¡Totalmente recomendable! 🙌",
  },
];

export const ReviewContainer = () => {
  const positionClases = [
    "lg:place-self-start",
    "lg:place-self-center",
    "lg:place-self-end-safe lg:m-2.5",
    "lg:place-self-end",
  ];

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:min-h-[285px] lg:items-stretch lg:gap-4 xl:gap-[30px] lg:mt-10">
      {reviews.map(({ id, name, buyerType, review, imgUrl }, index) => {
        return (
          <ReviewCard
            key={id}
            name={name}
            imgUrl={imgUrl}
            buyerType={buyerType}
            review={review}
            className={positionClases[index]}
          />
        );
      })}
    </div>
  );
};
