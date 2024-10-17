import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
export default function ProductCard({
  image,
  category,
  title,
  stars,
  price,
  sale,
  oldPrice,
}) {
  return (
    <div className="flex flex-col items-center text-center gap-1 relative">
      {sale && (
        <div className="rounded-full border-black  absolute -top-[15px] -right-2">
          <h4 className="rounded-full w-[35px] h-[35px] bg-greenColor text-[12px] flex text-center items-center justify-center">
            Sale!
          </h4>
        </div>
      )}
      <img src={image} alt={title} className="w-full  object-cover" />
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
      <div className="mt-2 flex gap-2">
        {sale && (
          <div className={` ${"line-through text-gray-300"}`}>
            <span>£</span>
            <span className="font-bold">{oldPrice}.00</span>
          </div>
        )}
        <div className="">
          <span>£</span>
          <span className="font-bold">{price}.00</span>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number,
  sale: PropTypes.bool,
  oldPrice: PropTypes.number,
};
