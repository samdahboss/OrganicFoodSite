import { createContext, useState} from "react";
import PropTypes from "prop-types";

export const SortOrderContext = createContext();

export default function SortOrderProvider({ children }) {
  const [orderBy, setOrderBy] = useState("category");

  const changeOrder = (event) => {
    setOrderBy(event.target.value);
  };

  const sortOrder = (a, b) => {
    return b[orderBy] - a[orderBy];
  };
  return (
    <SortOrderContext.Provider value={{ orderBy, changeOrder, sortOrder }}>
      {children}
    </SortOrderContext.Provider>
  );
}

SortOrderProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
    PropTypes.node, // Or a single node
  ]).isRequired, // Children prop is required
};
