import PriceFilter from "./FilterComponent";
import ShopNavProduct from "./ShopNavProduct";
export default function ShopNav() {
  const categories = [
    {
      category: "Groceries",
      quantity: 10,
    },
    {
      category: "Juices",
      quantity: 9,
    },
  ];
  const products = [
    {
      imageUrl: "/best-seller-4.jpg",
      productName: "Natural Extracted Edible Oil",
      realPrice: 34,
      discountPrice: 25,
      sale: true
    },
    {
      imageUrl: "/best-seller-1.jpg",
      productName: "Assorted Coffee",
      realPrice: 35
    },
    {
      imageUrl: "/best-seller-2.jpg",
      productName: "Hand Sanitizer",
      realPrice: 15
    },
  ];
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
        {products.map((item, index) => (
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
