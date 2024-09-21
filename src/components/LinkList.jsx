import PropTypes from "prop-types";

const LinkList = ({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="text-[22px] text-white font-semibold font-merriweather mb-4 lg:mb-12">
      {title}
    </h3>
    <ul className="list-none">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LinkList;
