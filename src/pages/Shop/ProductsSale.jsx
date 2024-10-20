import ProductCard from "../../components/ProductCard";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsCountContext } from "./ProductsCountContext";
import PaginationControls from "./PaginationControls";

export default function ProductsSale() {
  const { currentPage, setCurrentPage, totalPages, sortedProducts } =
    useContext(ProductsCountContext);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 mt-6 mb-12">
        {sortedProducts.map((item, index) => (
          <Link to={{ pathname: `/shop/${item.link}` }} key={index}>
            <ProductCard
              image={item.image}
              category={item.category}
              title={item.title}
              stars={5}
              price={item.price}
              sale={item.sale}
              oldPrice={item.oldPrice}
            />
          </Link>
        ))}
      </div>
      <PaginationControls
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}
