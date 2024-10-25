import PropTypes from "prop-types";
import { useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { FaSearch } from "react-icons/fa";
import BasicModal from "./ProductModal";

export default function ProductImageZoom({ currentProduct }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);
  return (
    <div className="lg:w-1/2 overflow-hidden relative">
      <button
        className="absolute top-5 right-5 bg-white p-2 rounded-full z-50"
        onClick={toggleOpen}
      >
        <FaSearch className="text-gray-600" />
      </button>
      <InnerImageZoom
        src={currentProduct.lgImage}
        zoomScale={1.1}
        zoomType="hover"
        zoomPreload={true}
        hideHint={true}
      />
      {open && <BasicModal currentProduct={currentProduct}/>}
    </div>
  );
}

ProductImageZoom.propTypes = {
  currentProduct: PropTypes.object,
};
