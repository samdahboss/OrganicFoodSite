import { FaArrowRight } from "react-icons/fa";
import HighlightsProduct from "../../utils/HighlightProducts";
import { Link } from "react-router-dom";
export default function ProductHighlights() {
  return (
    <section className="lg:py-24 py-12 bg-[#F8F6F3] relative">
      <div className="absolute -top-10 w-full">
        <img
          src="/basil-leaf.png"
          alt="Product Highlights"
          className="mx-auto hidden lg:block"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto py-12 px-12 gap-4">
        {HighlightsProduct.map((product, index) => (
          <div
            key={index}
            className="flex w-full h-[250px] lg:h-[350px] bg-white rounded-lg relative flex-col items-center shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-full absolute bottom-0 right-0 rounded-lg"
            />
            <div className="absolute top-0 p-6">
              <h2 className="text-2xl font-semibold font-merriweather text-gray-800 mt-4">
                {product.title}
              </h2>
              <p className="text-left text-gray-600 mt-2">
                {product.description}
              </p>
              <Link to="/shop">
                <button className="bg-darkGreenColor hover:bg-greenColor flex gap-2 items-center text-white px-6 py-3 mt-4 rounded-lg">
                  <FaArrowRight className="inline-block" size={16} />
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
