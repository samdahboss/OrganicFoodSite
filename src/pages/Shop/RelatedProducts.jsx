import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import allProducts from "../../utils/AllProducts";
import PropTypes from "prop-types";

export default function RelatedProducts({ productIndex }) {
  const currentProduct = productIndex;

  const generateRelatedProduct = () => {
    let number = Math.floor(Math.random() * (allProducts.length));
    if (number == currentProduct) {
      generateRelatedProduct();
    }else{
      return number;
    }    
  };
  const relatedProducts = [
    generateRelatedProduct(),
    generateRelatedProduct(),
    generateRelatedProduct(),
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {relatedProducts.map((item, index) => {
        const relatedProduct = allProducts[item];
        console.log(relatedProduct)
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
