import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard";
import TrendingProductsArr from "../../utils/TrendingProductsArr";
import { Link } from "react-router-dom";

export default function TrendingProducts() {
  return (
    <section className="lg:py-36 py-6 w-full">
      <div className="container mx-auto flex gap-4 flex-col px-12">
        <SectionTitle title="Trending Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TrendingProductsArr.map((product, index) => (
            <Link to={{ pathname: `/product/${product.index}` }} key={index}>
              <ProductCard
                image={product.image}
                category={product.category}
                title={product.title}
                stars={product.stars}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
