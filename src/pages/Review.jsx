// Importamos componentes en react
import { Hero } from "../components/staticReview/Hero.jsx";
import { RatingContainer } from "../components/staticReview/Rating-container.jsx";
import { ReviewContainer } from "../components/staticReview/Review-container.jsx";

import { Background } from "../components/staticReview/Background.jsx";

function Review() {
  return (
    // Aqui se usa la fuente con Tailwindcss
    <main className="px-6 py-20 relative xl:px-[165px] animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-out">
      <h1 className="flex justify-center text-center text-3xl font-semibold xl:text-5xl">
        Reseña de Clientes - Statica
      </h1>
      <Background />
      <div className="mb-12 xl:flex ">
        <Hero />
        <RatingContainer />
      </div>
      <ReviewContainer />
    </main>
  );
}

export default Review;
