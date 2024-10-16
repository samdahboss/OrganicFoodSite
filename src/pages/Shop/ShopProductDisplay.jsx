import ProductCard from "../../components/ProductCard";
import allProducts from "../../utils/AllProducts";
import ProductsSort from "./ProductsSort";

export default function ShopProductDisplay() {  
  
  return (
    <div className="shop-nav lg:ps-12 lg:w-3/4">
      <div className="flex flex-col">
        <h3 className="text-gray-500 py-1">Home/Shop</h3>
        <h1 className="text-[52px] font-merriweather font-bold text-greenColor mt-4">
          Shop
        </h1>
        <div className="mt-6">
          <ProductsSort/>
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
