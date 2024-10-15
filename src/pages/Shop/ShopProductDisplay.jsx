import ProductCard from "../../components/ProductCard";
export default function ShopProductDisplay() {
  const allProducts = [
    {
      image: "/coffee-asorted-400x400.jpg",
      category: "Groceries",
      title: "Assorted Coffee",
      stars: 5,
      price: 35,
    },
    {
      image: "/cashew-butter.jpg",
      category: "Groceries",
      title: "Cashew Butter",
      stars: 5,
      price: 35,
      discountPrice: 25,
      sale: true,
    },
    {
      image: "/diabetic-cookies-400x400.jpg",
      category: "Groceries",
      title: "Diabetic Cookies",
      price: 35,
      discountPrice: 25,
      sale: true,
    },
    {
      image: "/eggs-400x400.jpg",
      category: "Juice",
      title: "Farm Fresh Eggs",
      stars: 5,
      price: 34,
    },
    {
      image: "/orage-juice-kariz-400x400.jpg",
      category: "Juice",
      title: "Farm Fresh Eggs",
      stars: 5,
      price: 34,
    },
    {
      image: "/organic-honey-400x400.jpg",
      category: "Juice",
      title: "Farm Fresh Eggs",
      stars: 5,
      price: 34,
    },
    {
      image: "/best-seller-2.jpg",
      category: "Groceries",
      title: "Hand Sanitizer",
      stars: 5,
      price: 15,
    },
    {
      image: "/best-seller-3.jpg",
      category: "Groceries",
      title: "Handpicked Red Chillies",
      stars: 5,
      price: 19,
    },
    {
        image: "/best-seller-4.jpg",
        category: "Groceries",
        title: "Natural Extracted Edible Oil",
        discountPrice: 25,
        sale: true
      },
    
  ];
  return (
    <div className="shop-nav lg:ps-12 lg:w-3/4">
      <div className="flex flex-col">
        <h3 className="text-gray-500 py-1">Home/Shop</h3>
        <h1 className="text-[52px] font-merriweather font-bold text-greenColor mt-4">
          Shop
        </h1>
        <div className="mt-6">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <h4 className="text-gray-500">Showing --- results</h4>
            <select className="orderby p-2">
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
