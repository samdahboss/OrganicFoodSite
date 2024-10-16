import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";
import BestSalesProducts from "../../utils/BestSalesProduct";

export default function BestSales() {
  return (
    <section className="lg:py-36 py-6 w-full bg-[#FBFAF8]">
      <div className="container mx-auto flex gap-4 flex-col px-12">
        <SectionTitle title="Best Selling Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BestSalesProducts.map((product, index) => (
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
