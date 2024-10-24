import PropTypes from "prop-types";
export default function SelectDetailView({
  description,
  reviews,
  setDescription,
  setReviews,
}) {
  const toggleInfo = () => {
    setDescription((prevDescription) => !prevDescription);
    setReviews((prevReviews) => !prevReviews);
  };
  return (
    <div>
      <ul className="flex box-border ">
        <li
          className={`p-2 cursor-pointer flex items-end font-bold box-border ${
            description ? "border-greenColor border-t-[5px]" : ""
          }`}
          onClick={toggleInfo}
        >
          Description
        </li>
        <li
          className={`p-2 cursor-pointer flex items-end box-border font-bold ${
            reviews ? "border-greenColor border-t-[5px]" : ""
          }`}
          onClick={toggleInfo}
        >
          Reviews(0)
        </li>
      </ul>
    </div>
  );
}

SelectDetailView.propTypes = {
  description: PropTypes.bool.isRequired,
  reviews: PropTypes.bool.isRequired,
  setDescription: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
};
