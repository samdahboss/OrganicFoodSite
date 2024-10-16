import SectionTitle from "../../components/SectionTitle";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import reviews from '../../utils/HomeCustomerReviews'

export function Review({ image, name, stars, review }) {
  return (
    <div className="flex flex-col gap-4 shadow-lg lg:h-5/6 self-end p-12 justify-center bg-white rounded-lg">
      <div className="flex justify-center">
        {Array(stars)
          .fill(<FaStar />)
          .map((star, index) => (
            <span key={index} className="text-[#FFBB1E]">
              {star}
            </span>
          ))}
      </div>
      <p className="text-center">{review}</p>
      <div className="flex px-12 gap-4 items-center justify-center">
        <img src={image} />
        <h4>{name}</h4>
      </div>
    </div>
  );
}
Review.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};
export default function CustomerReviews() {
  
  return (
    <section className="relative lg:py-36 py-6 w-full bg-[url('/logo-leaf2-free-img.png')] bg-[length:37%_auto] inset-0 bg-no-repeat">
      <div className="absolute inset-0 bg-[#F8F6F3] opacity-90"></div>
      <div className="relative container mx-auto flex gap-4 flex-col px-12">
        <SectionTitle title="Customer Reviews" />
        <div className="grid lg:grid-cols-3 gap-4 lg:mt-8">
          <Review {...reviews[0]} />
          <div className="bg-[url('/review-card-bg.jpg')] bg-cover relative shadow-lg flex px-12 py-12 lg:py-24 flex-col rounded-lg">
            <div className="absolute inset-0 bg-[#220E14] rounded-lg opacity-50 hover:opacity-40"></div>
            <div className=" flex flex-col text-white justify-center text-center gap-8 z-20">
              <h2 className="text-4xl font-merriweather font-bold">
                Deal Of The Day 15% Off On All Vegetables!
              </h2>
              <p>
                I am text block. Click edit button to change this tex em ips.
              </p>
              <button className="bg-darkGreenColor hover:bg-greenColor w-[190px] lg:w-auto mx-auto text-white flex gap-2 items-center py-3 px-6 rounded-lg font-semibold">
                <FaShoppingCart size={18} /> SHOP NOW
              </button>
            </div>
          </div>
          <Review {...reviews[1]} />
        </div>
      </div>
    </section>
  );
}
