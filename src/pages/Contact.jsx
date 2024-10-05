import ContactCards from "../components/ContactCards";
export default function Contact() {
  return (
    <div className="container mx-auto">
      <section className="section-hero bg-[#F8F6F3] py-12 w-full">
        <div className="container mx-auto text-center py-12">
          <h1 className="lg:text-[52px] text-[36px] font-bold py-6 lg:py-12 font-merriweather">
            Get In Touch
          </h1>
        </div>
      </section>
      <section className="p-12">
        <div className="relative container mx-auto p-8 -mt-32 bg-white rounded-lg shadow-lg">
          <img
            src="/basil-leaf.png"
            className="mx-auto -mt-16 mb-12  w-[150px]"
          />
          <ContactCards />
        </div>
      </section>
      <section className="px-12">
        <div className="container mx-auto py-4 px-12">
          <h1 className="text-2xl lg:text-3xl text-black text-center font-merriweather font-bold">
            Frequently Asked Question!
          </h1>
          <div className="w-full relative">
            <img src="/logo-leaf-new.png" className="mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
