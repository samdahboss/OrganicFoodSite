import PropTypes from 'prop-types'
export default function PageBtn({currentPage, setCurrentPage, page}) {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      disabled={currentPage === page}
      className={`${currentPage == page ? "bg-greenColor text-white": "text-greenColor bg-transparent"} hover:bg-greenColor hover:text-white  border border-greenColor p-2 `}
    >
      {page}
    </button>
  );
}

PageBtn.propTypes ={
    page: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
}

