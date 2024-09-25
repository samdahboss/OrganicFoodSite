import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
export default function ProductCard({ image, category, title, stars, price }) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <img src={image} alt={title} className="w-full object-cover" />
      <h4 className="text-sm text-gray-500">{category}</h4>
      <h2 className="text-lg font-semibold font-merriweather">{title}</h2>
      <div className="flex items-center">
        <span className="text-greenColor text-lg flex">
          {Array(stars)
            .fill(<FaRegStar />)
            .map((star, index) => (
              <span key={index}>{star}</span>
            ))}
        </span>
      </div>
      <h3 className="text-sm font-bold">£{price}.00</h3>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
