import { Helmet } from "react-helmet-async";
import { Hero } from "../components/staticReview/Hero.jsx";
import { RatingContainer } from "../components/staticReview/Rating-container.jsx";
import { ReviewContainer } from "../components/staticReview/Review-container.jsx";

import { Background } from "../components/staticReview/Background.jsx";

function Review() {
  return (
    <>
      <Helmet>
        <title>Reseñas de Clientes - Mi Tienda</title>
        <meta
          name="description"
          content="Lee lo que nuestros clientes opinan sobre nuestros productos y servicio. Reseñas y valoraciones reales."
        />
      </Helmet>
      <main className="px-6 py-20 relative lg:px-20 xl:px-[165px] animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-out">
        <h1 className="flex justify-center text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
          Reseña de Clientes - Estática
        </h1>
        <Background />
        <div className="mb-12 lg:flex lg:justify-between lg:items-center xl:justify-start lg:gap-10">
          <Hero />
          <RatingContainer />
        </div>
        <ReviewContainer />
      </main>
    </>
  );
}

export default Review;
