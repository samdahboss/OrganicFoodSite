import LinkList from "./LinkList";
import ImageButton from "./ImageButton";

export default function Footer() {
  const quickLinks = [
    "About",
    "Cart",
    "Checkout",
    "Contact",
    "Home",
    "My account",
    "Shop",
  ];
  const siteLinks = [
    "Privacy Policy",
    "Shipping Details",
    "Offers Coupons",
    "Terms & Conditions",
  ];
  const appLinks = [
    "Know More About Us",
    "Visit Store",
    "Let's Connect",
    "Locate Stores",
  ];
  const appImages = ["/play-store.png", "/app-store.png"];

  return (
    <div className="footer py-24 px-6 bg-black text-gray-400">
      <div className="flex flex-col lg:flex-row text-center md:text-left justify-between">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <img
            src="/organic-store-white-logo.png"
            className="w-[200px] mx-auto lg:mx-0"
            alt="Logo"
          />
          <div className="flex mb-6 lg:mb-0">
            <p className="italic font-bold lg:w-3/4 lg:text-left text-center">
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
              Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
              quis faucibus urna. Suspendisse pellentesque.
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 px-4 lg:px-0 lg:flex gap-12 grid grid-cols-1 md:grid-cols-2 flex-col">
          <LinkList title="Quick Links" links={quickLinks} />
          <LinkList title="Site Links" links={siteLinks} />
        </div>
        <div className="lg:w-1/4 px-4 lg:px-0 mt-6 lg:mt-0 lg:flex gap-6 grid grid-cols-1 md:grid-cols-2 flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="text-[22px] text-white font-semibold lg:mb-6 font-merriweather">
              Download Our Mobile App
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam gravida sollicitudin. Praesent porta enim mi, non
              tincidunt libero interdum sit amet.
            </p>
          </div>
          <LinkList title="Quick Links" links={appLinks} />
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            {appImages.map((imgSrc, index) => (
              <ImageButton
                key={index}
                imgSrc={imgSrc}
                altText={`App Store ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
