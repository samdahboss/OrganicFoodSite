import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";  
export default function TrendingProducts() {
    const products = [
        {
          image: "/best-seller-1.jpg",
          category: "Groceries",
          title: "Assorted Coffee",
          stars: 5,
          price: 35,
        },
        {
          image: "/best-seller-5.jpg",
          category: "Juice",
          title: "Fresh Orange Juice",
          stars: 5,
          price:  18,
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
        }
      ]
  return (
    <section className="lg:py-36 py-6 w-full">
    <div className="container flex gap-4 flex-col px-12">
      <SectionTitle title="Trending Products"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              category={product.category}
              title={product.title}
              stars={product.stars}
              price={product.price}
            />
          ))}
        </div>
    </div>
    </section>
  )
}
