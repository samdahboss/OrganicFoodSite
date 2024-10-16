import PriceFilter from "./FilterComponent";
import ShopNavProduct from "./ShopNavProduct";
import ShopNavProducts from "../../utils/ShopNavProductsArr";
import categories from "../../utils/ShopNavCategoriesList";

export default function ShopNav() {
  return (
    <div className="shop-nav pe-12 pb-64 lg:w-1/4 border-r border-gray-300">
      <div className="flex gap-2 pb-8">
        <input className="p-1 w-5/6" placeholder="Search Products..." />
        <button className="bg-darkGreenColor w-1/6 hover:bg-greenColor text-white p-2 rounded-lg">
          {">"}
        </button>
      </div>
      <PriceFilter />
      <div className="mt-4">
        {categories.map((item, index) => (
          <div key={index} className="ps-4 flex my-2">
            <h4 className="text-greenColor">{item.category}</h4>
            <span className="ps-2">({item.quantity})</span>
          </div>
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