import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SortOrderContext = createContext();

export default function SortOrderProvider({ children }) {
  const [orderBy, setOrderBy] = useState("price-hl");

  const changeOrder = (event) => {
    setOrderBy(event.target.value);
  };

  const sortOrder = (a, b) => {
    if (orderBy === "price-lh") {
      return a["price"] - b["price"];
    }else if (orderBy === "price-hl") {
      return b["price"] - a["price"];
    }else{
      return b[orderBy] - a[orderBy];
    }
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
