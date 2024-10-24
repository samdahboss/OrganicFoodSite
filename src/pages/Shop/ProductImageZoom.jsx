import PropTypes from "prop-types";

export default function ProductImageZoom({ currentProduct }) {
  return (
    <div className="lg:w-1/2 overflow-hidden relative">
      <img
        src={currentProduct.lgImage}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-150 hover:origin-center"
      />
    </div>
  );
}

ProductImageZoom.propTypes = {
  currentProduct: PropTypes.object,
};
