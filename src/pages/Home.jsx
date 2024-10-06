import Hero from "../components/Hero";
import QualityAssurance from "../components/QualityAssurance";
import BestSales from "../components/BestSales";
import ProductHighlights from "../components/ProductHighlights";
import TrendingProducts from "../components/TrendingProducts";
import CustomerReviews from "../components/CustomerReviews";
import CallToActionSection from "../components/CallToActionSection";
import FeaturedBrands from "../components/FeaturedBrands";
export default function Home() {
  return (
    <div className=" mx-auto">
      <Hero />
      <QualityAssurance />
      <BestSales />
      <ProductHighlights />
      <CallToActionSection />
      <TrendingProducts />
      <CustomerReviews />
      <FeaturedBrands/>
    </div>
  );
}
