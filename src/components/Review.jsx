import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types'
export default function Review({ image, name, stars, review }) {
  return (
    <div className="flex flex-col gap-4 shadow-lg lg:h-5/6 self-end p-12 justify-center bg-white rounded-lg">
      <div className="flex justify-center">
        {Array(stars)
          .fill(<FaStar />)
          .map((star, index) => (
            <span key={index} className="text-[#FFBB1E]">{star}</span>
          ))}
      </div>
      <p className="text-center">{review}</p>
      <div className="flex px-12 gap-4 items-center justify-center">
        <img src={image}/>
        <h4>{name}</h4>
      </div>
    </div>
  );
}
Review.propTypes ={
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired
}
