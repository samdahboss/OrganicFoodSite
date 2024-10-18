import PageBtn from "./PageBtn";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function PaginationControls({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  return (
    <div className="gap-2 grid grid-cols-3 w-[150px]">
      {currentPage === 2 && (
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev - 1, totalPages))
          }
          className="hover:bg-greenColor hover:text-white text-greenColor bg-transparent border border-greenColor p-2 "
        >
          <FaArrowLeft />
        </button>
      )}
      <PageBtn
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        page={1}
      />
      <PageBtn
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        page={2}
      />

      {currentPage == 1 && (
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="hover:bg-greenColor hover:text-white text-greenColor bg-transparent border border-greenColor p-2 "
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}

PaginationControls.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
