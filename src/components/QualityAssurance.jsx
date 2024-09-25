import Quality from "../components/Quality";
import { FaTruck, FaUser, FaDollarSign, FaRecycle } from "react-icons/fa";

export default function QualityAssurance() {
  const qualities = [
    {
      icon: <FaTruck className="text-[#8BC34A]" size={25}/>,
      title: "Free Shipping",
      description: "Above $5 only",
    },
    {
      icon: <FaUser className="text-[#8BC34A]" size={25}/>,
      title: "Certified Organic",
      description: "100% Guarantee",
    },
    {
      icon: <FaDollarSign className="text-[#8BC34A]" size={25}/>,
      title: "Huge Savings",
      description: "At Lowest Price",
    },
    {
      icon: <FaRecycle className="text-[#8BC34A]" size={25}/>,
      title: "Easy Returns",
      description: "No Questions Asked",
    }
  ]
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-black mx-auto p-6">
        {
            qualities.map((quality, index) => (
                <Quality key={index} {...quality} />
            ))
        }
      </section>
  )
}
