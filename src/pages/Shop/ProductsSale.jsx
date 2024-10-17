import ProductCard from "../../components/ProductCard";
import allProducts from "../../utils/AllProducts";
import PageBtn from "./PageBtn";
import { useContext, useState } from "react";
import { SortOrderContext } from "./SortOrderContext";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

export default function ProductsSale() {
  const { sortOrder } = useContext(SortOrderContext);
  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const productsDisplayed = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 mt-6">
      {productsDisplayed.sort(sortOrder).map((item, index) => (
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
      <div className="gap-2 grid grid-cols-3 w-[150px]">
        {currentPage === 2 && (<button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev - 1, totalPages))
          }
          className="hover:bg-greenColor hover:text-white text-greenColor bg-transparent border border-greenColor p-2 "
        >
          <FaArrowLeft/>
        </button>)}
        <PageBtn currentPage={currentPage} setCurrentPage={setCurrentPage} page={1}/>
        <PageBtn currentPage={currentPage} setCurrentPage={setCurrentPage} page={2}/>
        

        {currentPage == 1 && (<button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="hover:bg-greenColor hover:text-white text-greenColor bg-transparent border border-greenColor p-2 "
        >
          <FaArrowRight/>
        </button>)}
      </div>
    </div>
  );
}
