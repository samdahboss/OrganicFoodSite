import ProductCard from "../../components/ProductCard";
import { useContext, useState } from "react";
import { SortOrderContext } from "./SortOrderContext";
import { FilterContext } from "./FilterProductsContext";
import PaginationControls from "./PaginationControls";
import allProducts from "../../utils/AllProducts";

export default function ProductsSale() {
  const { sortOrder } = useContext(SortOrderContext);
  const { handleFilter } = useContext(FilterContext);
  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const productsDisplayed = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 mt-6 mb-12">
        {productsDisplayed
          .filter(handleFilter)
          .sort(sortOrder)
          .map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
              stars={5}
              price={item.price}
              sale={item.sale}
              oldPrice={item.oldPrice}
            />
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
