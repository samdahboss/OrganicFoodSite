import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";
export default function BestSales() {
  const products = [
    {
      image: "/best-seller-1.jpg",
      category: "Groceries",
      title: "Assorted Coffee",
      stars: 5,
      price: 35,
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
      stars: 5,
      price:  25,
    },
  ]
  return (
    <section className="lg:py-36 py-6 w-full bg-[#FBFAF8]">
      <div className="container mx-auto flex gap-4 flex-col px-12">
        <SectionTitle title="Best Selling Products"/>
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
  );
}
