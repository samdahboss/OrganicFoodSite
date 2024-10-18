import PageBtn from "./PageBtn";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function PaginationControls({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const pageArr = Array(totalPages).fill(0);
  const pageNavs = pageArr.map((item, index) => {
    return (
      <PageBtn
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        page={index + 1}
        key={index}
      />
    );
  });
  return (
    <div className="gap-2 flex w-[150px]">
      {currentPage !== 1 && (
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev - 1, totalPages))
          }
          className="hover:bg-greenColor hover:text-white text-greenColor bg-transparent border border-greenColor p-2 "
        >
          <FaArrowLeft />
        </button>
      )}

      {pageNavs}

      {currentPage < totalPages && (
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
