import HomeHero from "./HomeHero";
import QualityAssurance from "./QualityAssurance";
import BestSales from "./BestSales";
import ProductHighlights from "./ProductHighlights";
import TrendingProducts from "./TrendingProducts";
import CustomerReviews from "./CustomerReviews";
import CallToActionSection from "./CallToActionSection";
import FeaturedBrands from "./FeaturedBrands";
export default function Home() {
  return (
    <div className=" mx-auto">
      <HomeHero />
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
