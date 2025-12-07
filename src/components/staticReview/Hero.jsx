export const Hero = () => {
  return (
    // Dentro de cada componente solo debe haber un etiqueta padre, no permite dos react

    <section className="mb-10 xl:flex-1">
      <h1
        className="text-gray-700 text-[2.5rem] leading-8 font-bold
        px-8 text-center mb-4 mt-6 xl:text-pretty xl:w-[445px] xl:text-[3.5rem]/[3rem] 
        xl:p-0 
        "
      >
        Mas de 10,000 usuarios calificaron nuestros productos.
      </h1>
      <p
        className="text-gray-700 text-center font-medium text-[17.5px] 
        leading-[1.5625rem] xl:text-[1.0625rem] xl:w-[445px]
        "
      >
        Descubre lo que nuestros clientes opinan. En esta sección de reseñas,
        encontrarás testimonios honestos de compradores verificados que han
        experimentado la calidad de nuestros productos de primera mano. Sus
        comentarios te darán la confianza que necesitas para tomar la decisión
        correcta y unirte a nuestra comunidad de clientes satisfechos.
      </p>
    </section>
  );
};
