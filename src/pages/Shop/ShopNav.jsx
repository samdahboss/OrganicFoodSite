import PriceFilter from "./FilterComponent";
import ShopNavProduct from "./ShopNavProduct";
import ShopNavProducts from "../../utils/ShopNavProductsArr";
import categories from "../../utils/ShopNavCategoriesList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "./FilterProductsContext";

export default function ShopNav() {
  const {setCategories} = useContext(FilterContext)
  return (
    <div className="shop-nav lg:pe-12 mt-16 lg:mt-0 pb-64 lg:w-1/4 border-r border-gray-300">
      <div className="flex gap-2 pb-8">
        <input className="p-1 w-5/6" placeholder="Search Products..." />
        <button className="bg-darkGreenColor w-1/6 hover:bg-greenColor text-white p-2 rounded-lg">
          {">"}
        </button>
      </div>
      <PriceFilter />
      <div className="mt-4">
        {categories.map((item, index) => (
          <Link key={index} to={item.link} onClick={()=> setCategories(item.category)}>
            <div className="ps-4 flex my-2">
              <h4 className="text-greenColor">{item.category}</h4>
              <span className="ps-2">({item.quantity})</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        {ShopNavProducts.map((item, index) => (
          <ShopNavProduct
            key={index}
            imageUrl={item.imageUrl}
            productName={item.productName}
            realPrice={item.realPrice}
            discountPrice={item.discountPrice}
            sale={item.sale}
          />
        ))}
      </div>
    </div>
  );
}
