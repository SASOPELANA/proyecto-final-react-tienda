// Imagen de fondo para mobile superior e inferior
import bgTopMobile from "../../assets/mobile-top.svg";
import bgMobile from "../../assets/mobile.svg";

// Imagenes de fondo para desktop superior y inferior
import bgTopDestok from "../../assets/destok-top.svg";
import bgDestok from "../../assets/destok.svg";

export const Background = () => {
  return (
    <div className="mb-12">
      <picture className="absolute top-0 left-0 -z-10">
        <source media="(max-width: 375px)" srcSet={bgTopMobile} />
        <source media="(min-width: 376px)" srcSet={bgTopDestok} />
        <img src={bgTopMobile} alt="background-defaul" />
      </picture>

      <picture className="absolute bottom-0 right-0 -z-10">
        <source media="(max-width: 375px)" srcSet={bgMobile} />
        <source media="(min-width: 376px)" srcSet={bgDestok} />
        <img src={bgMobile} alt="background-defaul" />
      </picture>
    </div>
  );
};
