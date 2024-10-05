import { FaCheckCircle } from "react-icons/fa";
export default function AboutList() {
  const products = [
    "Fresh fruits",
    "Dry fruits",
    "Fresh vegetables",
    "Dried vegetables",
    "Beauty products",
    "Milk products",
    "Organic honey",
    "Organic tea",
  ];
  return (
      <ul className="grid grid-cols-2">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            <FaCheckCircle className="text-[#8bc34a]" />
            <li key={index}>{product}</li>
          </div>
        ))}
      </ul>
  );
}
