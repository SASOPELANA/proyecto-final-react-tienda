import { ProductAyuda } from "../types/products.types";

/**
 * @param {{ product: typeof ProductAyuda   }} props
 */

const Card = ({ product }) => {
  return (
    <div key={product.id}>
      <img className="size-48" src={product.image} alt={product.name} />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-pretty">{product.description}</p>
      <strong>{product.price}</strong>
      <p className="flex flex-wrap gap-2">
        {product.categories.map((cat, index) => (
          <span key={index}>{cat.trim()}</span>
        ))}
      </p>
    </div>
  );
};

export default Card;
