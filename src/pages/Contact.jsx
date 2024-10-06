import ContactCards from "../components/ContactCards";
import Faq from "../components/Faq";
import GeneralHero from "../components/GeneralHero";
export default function Contact() {
  return (
    <div className="container mx-auto">
      <GeneralHero title="Get In Touch" />
      <section className="p-12">
        <div className="relative container mx-auto p-8 -mt-32 bg-white rounded-lg shadow-lg">
          <img
            src="/basil-leaf.png"
            className="mx-auto -mt-16 mb-12  w-[150px]"
          />
          <ContactCards />
        </div>
      </section>
      <section className="relative lg:px-12  pb-24">
        <div className="container flex flex-col gap-4 mx-auto px-12">
          <h1 className="text-2xl lg:text-3xl text-black text-center relative z-40 font-merriweather font-bold">
            Frequently Asked Question!
          </h1>
          <div className="w-full relative z-40 pb-8">
            <img src="/logo-leaf-new.png" className="mx-auto" />
          </div>
          <Faq/>
        </div>
      </section>
    </div>
  );
}
