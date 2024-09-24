import { FaShoppingCart } from "react-icons/fa";
export default function Home() {
  return (
    <div className="container mx-auto px-12">
      <section className="flex hero py-36 relative  bg-[#FBFAF8]">
        <img src="/leaves-free-img.png" alt="leaves" className="absolute bottom-0 right-0 z-10  w-80" />
        <div className="hero w-1/2 z-20">
          <img src="/organic-products-hero.png" alt="hero" />
        </div>
        <div className="w-1/2 flex flex-col gap-4 pl-12 py-12 z-20">
          <div>
            <img src="/logo-leaf-new.png" alt="logo" />
          </div>
          <h5 className="text-[17px] font-bold">Best Quality Products</h5>
          <h1 className="text-6xl leading-[72px] font-merriweather font-bold">
            Join The Organic Movement!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="py-4">
            <button className="bg-darkGreenColor hover:bg-greenColor text-white flex gap-2 items-center py-3 px-6 rounded-lg font-semibold">
              <FaShoppingCart size={18}/> SHOP NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
