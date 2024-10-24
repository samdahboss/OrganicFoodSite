import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import allProducts from "../../utils/AllProducts";

export default function RelatedProducts() {
  const relatedProducts = [
    Math.ceil(Math.random() * allProducts.length),
    Math.ceil(Math.random() * allProducts.length),
    Math.ceil(Math.random() * allProducts.length),
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {relatedProducts.map((item, index) => {
        const relatedProduct = allProducts[item];
        return (
          <Link to={{ pathname: `/product/${item}` }} key={index}>
            <ProductCard
              image={relatedProduct.image}
              category={relatedProduct.category}
              title={relatedProduct.title}
              stars={5}
              price={relatedProduct.price}
              sale={relatedProduct.sale}
              oldPrice={relatedProduct.oldPrice}
            />
          </Link>
        );
      })}
    </div>
  );
}
