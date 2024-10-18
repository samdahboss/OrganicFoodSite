import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const [priceRange, setPriceRange] = useState([10, 40]); // Initial price range
  const handleFilter = () => {
    
  };
  return (
    <FilterContext.Provider
      value={{ priceRange, handleFilter, setPriceRange }}
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
    PropTypes.node, // Or a single node
  ]).isRequired, // Children prop is required
};
