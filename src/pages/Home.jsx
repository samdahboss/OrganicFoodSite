import Hero from "../components/Hero";
import QualityAssurance from "../components/QualityAssurance";
import BestSales from "../components/BestSales";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Hero />
      <QualityAssurance />
      <BestSales />
    </div>
  );
}
