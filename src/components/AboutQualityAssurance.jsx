import { FaStar, FaShoppingCart } from "react-icons/fa";
import Carousel from "../components/Carousel";
import AboutList from "./AboutList";
export default function AboutQualityAssurance() {
  return (
    <section className="relative w-full py-36 px-8  bg-[url('/leaves-free-img.png')] bg-[length:20%_auto] bg-bottom bg-right bg-no-repeat">
      <div className="absolute inset-0 bg-[#FAF9F7] bg-opacity-60 z-0"></div>
      <div className="container w-full mx-auto flex lg:flex-row flex-col gap-8 lg:gap-0 inset-0 relative z-20">
        <div className="lg:w-[45%] px-8 bg-gray-100 items-center rounded-lg">
          <Carousel />
          <div className="flex flex-col gap-4 px-12 py-4 self-end justify-center rounded-lg">
            <div className="flex justify-center">
              {Array(5)
                .fill(<FaStar />)
                .map((star, index) => (
                  <span key={index} className="text-[#FFBB1E]">
                    {star}
                  </span>
                ))}
            </div>
            <p className="text-center">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex px-12 gap-4 items-center justify-center">
              <img src="/client02-free-img.png" />
              <h4>Mila Kunis</h4>
            </div>
          </div>
        </div>
        <div className="lg:w-[55%] lg:py-24 lg:pl-24 gap-6 flex flex-col lg:pr-12">
          <div className="lg:flex ">
            <img
              src="/organic-badge-freeimg.png"
              className="w-[120px] mx-auto"
            />
            <div className="flex gap-4 flex-col text-center lg:text-left">
              <h1 className="text-2xl text-black font-merriweather font-bold">
                Certified Products
              </h1>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>
          <h1 className="text-2xl lg:text-3xl text-black text-center lg:text-left font-merriweather font-bold">
            We Deal With Various Quality Organic Products!
          </h1>
          <div className="w-full relative">
            <img src='/logo-leaf-new.png' className="mx-auto lg:ml-0"/>
          </div>
          <AboutList />
          <div className="py-4">
            <button className="bg-darkGreenColor hover:bg-greenColor mx-auto lg:ml-0 text-[14px] text-white flex gap-2 z-40 items-center py-3 px-6 rounded-lg font-semibold">
              <FaShoppingCart size={18}/> START SHOPPING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
