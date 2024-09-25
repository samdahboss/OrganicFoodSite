import Hero from "../components/Hero";
import QualityAssurance from "../components/QualityAssurance";
import BestSales from "../components/BestSales";
import ProductHighlights from "../components/ProductHighlights";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Hero />
      <QualityAssurance />
      <BestSales />
      <ProductHighlights />
    </div>
  );
}
