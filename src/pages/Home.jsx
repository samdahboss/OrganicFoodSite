import Hero from "../components/Hero";
import QualityAssurance from "../components/QualityAssurance";
import BestSales from "../components/BestSales";
import ProductHighlights from "../components/ProductHighlights";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Hero />
      <QualityAssurance />
      <BestSales />
      <ProductHighlights />
      <div className="call-to-action bg-black text-white  py-16">
        <div className="container flex justify-between px-12">
          <h1 className="text-4xl font-semibold text-white">
            Get 25% Off On Your First Purchase!
          </h1>
          <button className="bg-darkGreenColor hover:bg-greenColor text-white flex gap-2 z-40 items-center py-3 px-6 rounded-lg font-semibold">
            <FaShoppingCart size={18} /> SHOP NOW
          </button>
        </div>
      </div>
      <div className="call-to-action bg-[#F8F6F3] texx-white  py-4">
        <div className="container flex justify-between px-64">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold font-merriweather text-black">
            Try It For Free. No Registration Needed.
            </h2>
          </div>
        </div>
      </div>
      
    </div>
  );
}
