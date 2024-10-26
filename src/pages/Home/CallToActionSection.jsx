import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function CallToActionSection() {
  return (
    <section>
      <div className="call-to-action bg-black text-white py-6 lg:py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-6 justify-between lg:px-12 px-6">
          <h1 className="lg:text-4xl text-2xl font-semibold text-white">
            Get 25% Off On Your First Purchase!
          </h1>
          <Link to="/shop">
          <button className="bg-darkGreenColor hover:bg-greenColor w-[190px] lg:w-auto text-white flex gap-2 items-center py-3 px-6 rounded-lg font-semibold">
            <FaShoppingCart size={18} /> SHOP NOW
          </button>
          </Link>
          
        </div>
      </div>
      <div className="call-to-action bg-[#F8F6F3] texx-white  py-4">
        <div className="container mx-auto flex justify-between lg:px-64">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-semibold font-merriweather text-black">
              Try It For Free. No Registration Needed.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
