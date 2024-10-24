import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import allProducts from "../../utils/AllProducts";
import PropTypes from "prop-types";

export default function RelatedProducts({ productIndex }) {
  const currentProduct = productIndex;

  const generateRelatedProducts = () => {
    const relatedProductsSet = new Set();

    while (relatedProductsSet.size < 3) {
      let randomIndex = Math.floor(Math.random() * allProducts.length);
      
      // Ensure the randomly selected product is not the current product
      // and has not been already selected
      if (randomIndex !== currentProduct && !relatedProductsSet.has(randomIndex)) {
        relatedProductsSet.add(randomIndex);
      }
    }

    // Convert the set to an array for further use
    return Array.from(relatedProductsSet);
  };

  const relatedProducts = generateRelatedProducts();

  return (
    <div className="grid lg:grid-cols-4 gap-4">
      {relatedProducts.map((item, index) => {
        const relatedProduct = allProducts[item];
        return (
          <Link to={{ pathname: `/product/${item}` }} key={index}>
            <ProductCard {...relatedProduct} />
          </Link>
        );
      })}
    </div>
  );
}

RelatedProducts.propTypes = {
  productIndex: PropTypes.number,
};
