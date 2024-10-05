import NumberCounter from "../components/NumberCounter";
import AboutQualityAssurance from "../components/AboutQualityAssurance";
export default function About() {
  return (
    <div className="container mx-auto">
      <section className="section-hero bg-[#F8F6F3] py-12 w-full">
        <div className="container mx-auto text-center">
          <h1 className="lg:text-[52px] text-[36px] font-bold py-6 lg:py-12 font-merriweather">
            About Us
          </h1>
        </div>
      </section>
      <section className="about-description w-full">
        <div className="container mx-auto">
          <img src="/basil-leaf.png" className="mx-auto w-[150px] -mt-8" />
          <div className="lg:flex w-full py-6 lg:py-12">
            <div className="lg:w-1/2 text-gray-500 py-12 pl-6 flex flex-col gap-4 lg:gap-8">
              <div className="lg:w-5/6 flex flex-col gap-4 lg:gap-8">
                <h2 className="text-2xl lg:text-4xl text-black font-merriweather font-bold">
                  We Are Your Favourite Store.
                </h2>
                <p className="leading-[25px]">
                  Tuas quisquam quo gravida proident harum, aptent ligula anim
                  consequuntur, ultrices mauris, nunc voluptates lobortis,
                  varius, potenti placeat! Fuga omnis. Cubilia congue.
                  Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos
                  ultrices natus distinctio ultrices consequuntur numqu.
                </p>
              </div>
              <div className="lg:w-5/6">
                <p className="leading-[25px]">
                  Officiis fuga harum porro et? Similique rhoncus atque! Netus
                  blanditiis provident nunc posuere. Rem sequi, commodo, lorem
                  tellus elit, hic sem tenetur anim amet quas, malesuada
                  proident platea corrupti expedita.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 p-4">
              <img src="/banner-01.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="number-counter bg-black w-full text-white px-16 py-6">
        <div className="container mx-auto grid lg:grid-cols-4">
          <div className="py-6 flex items-center">
            <h3 className="font-merriweather text-[20px] font-bold leading-[24px]">
              Numbers Speak For Themselves!
            </h3>
          </div>
          <div className="p-6">
            <NumberCounter
              startNo="4800"
              finalNo="5000"
              title="Curated Products"
            />
          </div>
          <div className="p-6">
            <NumberCounter startNo="0" finalNo="800" title="Curated Products" />
          </div>
          <div className="p-6">
            <NumberCounter
              startNo="0"
              finalNo="40"
              title="Product Categories"
            />
          </div>
        </div>
      </section>
      <AboutQualityAssurance/>
    </div>
  );
}
