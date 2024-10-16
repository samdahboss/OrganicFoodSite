import ProductsSort from "./ProductsSort";
import ProductsSale from "./ProductsSale";
export default function ShopProductDisplay() {
  return (
    <div className="shop-nav lg:ps-12 lg:w-3/4">
      <div className="flex flex-col">
        <h3 className="text-gray-500 py-1">Home/Shop</h3>
        <h1 className="text-[52px] font-merriweather font-bold text-greenColor mt-4">
          Shop
        </h1>
        <div className="mt-6">
          <ProductsSort />
          <ProductsSale/>
        </div>
      </div>
    </div>
  );
}
