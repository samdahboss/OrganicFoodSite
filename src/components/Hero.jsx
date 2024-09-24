import { FaShoppingCart } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="flex hero lg:py-24 relative flex-col lg:flex-row px-12 container bg-[#FBFAF8]">
        <div className="absolute bottom-0 right-0 w-80 hidden lg:block">
            <img src="/leaves-free-img.png" className="z-0"/>
            <div className="absolute bottom-0 right-0 bg-[#FBFAF8] opacity-50 z-20 w-full h-full"></div>
        </div>
        <div className="hero lg:w-1/2 hidden lg:block z-20">
          <img src="/organic-products-hero.png" alt="hero" />
        </div>
        <div className="lg:w-1/2 items-center text-center lg:text-left lg:items-start flex flex-col gap-4 pl-12 py-12 z-20">
          <div>
            <img src="/logo-leaf-new.png" alt="logo" />
          </div>
          <h5 className="text-[17px] font-bold">Best Quality Products</h5>
          <h1 className="lg:text-6xl text-[30px] lg:leading-[72px] font-merriweather font-bold">
            Join The Organic Movement!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="py-4">
            <button className="bg-darkGreenColor hover:bg-greenColor text-white flex gap-2 z-40 items-center py-3 px-6 rounded-lg font-semibold">
              <FaShoppingCart size={18}/> SHOP NOW
            </button>
          </div>
        </div>
        <div className="hero lg:w-1/2 lg:hidden z-20">
          <img src="/organic-products-hero.png" alt="hero" className="w-full" />
        </div>
      </section>
  )
}
