import brandsLogo from "../../utils/BrandsLogo";
export default function FeaturedBrands() {
  return (
    <section className="bg-[#F8F6F3]">
      <div className="container flex flex-col lg:flex-row px-12">
        <div className="lg:py-12 px-4">
          <h2 className="text-2xl text-center font-bold font-merriweather">
            Featured Brands
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5">
            {
                brandsLogo.map((logo, index) => (
                    <div key={index} className="flex items-center">
                      <img src={logo} alt="brand" />
                    </div>
                ))
            }
          </div>
      </div>
    </section>
  );
}
