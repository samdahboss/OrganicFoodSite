import PropTypes from "prop-types";
export const ImageButton = ({ imgSrc, altText }) => (
    <button className="text-white rounded-md">
      <a href="#">
        <img src={imgSrc} alt={altText} className="w-[150px]" />
      </a>
    </button>
  );
  
  ImageButton.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  };
  export default ImageButton;