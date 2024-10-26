import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const [priceRange, setPriceRange] = useState([10, 40]); // Initial price range
  const [category, setCategories] = useState("all")
  useEffect(()=>{
    console.log(category)
  }, [category])
  
  const handleFilter = (product) => {
    return product.price >= priceRange[0] && product.price <= priceRange[1]
  };
  const filterCategories = (product) =>{
    if (category === "all"){
      return true
    }else{
      return product.category == category;
    }
  }
  return (
    <FilterContext.Provider
      value={{ priceRange, handleFilter, setPriceRange, setCategories, filterCategories }}
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
