import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import allProducts from "../../utils/AllProducts";

export default function ShopProductDisplay() {  
  const [orderBy, setOrderBy] = useState("");
  const changeOrder = (event) => {
    setOrderBy(event.target.value);
  };
  return (
    <div className="shop-nav lg:ps-12 lg:w-3/4">
      <div className="flex flex-col">
        <h3 className="text-gray-500 py-1">Home/Shop</h3>
        <h1 className="text-[52px] font-merriweather font-bold text-greenColor mt-4">
          Shop
        </h1>
        <div className="mt-6">
          <div className="flex justify-between lg:items-center flex-col gap-2 lg:gap-0 lg:flex-row">
            <h4 className="text-gray-500">Showing --- results</h4>
            <select
              className="orderby p-2 outline-0"
              value={orderBy}
              onChange={changeOrder}
            >
              <option>Default Sorting</option>
              <option>Sort by Popularity</option>
              <option>Sort by Average Rating</option>
              <option>Sort by Latest</option>
              <option>Sort by Price: low to high</option>
              <option>Sort by Price: high to low</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 mt-6">
            {allProducts.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                category={item.category}
                title={item.title}
                stars={5}
                price={item.price}
                sale={item.sale}
                discountPrice={item.discountPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
