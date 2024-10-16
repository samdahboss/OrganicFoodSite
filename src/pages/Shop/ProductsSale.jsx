import ProductCard from "../../components/ProductCard";
import allProducts from "../../utils/AllProducts";
import { useContext } from "react";
import { SortOrderContext } from "./SortOrderContext";

export default function ProductsSale() {
  const { orderBy } = useContext(SortOrderContext);
  console.log(orderBy)
  return (
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
  );
}
