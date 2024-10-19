import { createContext } from "react";
import PropTypes from 'prop-types'
export const ProductsCountContext = createContext()

export default function ProductsCountProvider({children}) {
  
  return (
    <ProductsCountContext.Provider value={{}}>
        {children}
    </ProductsCountContext.Provider>
  )
}

ProductsCountProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
      PropTypes.node, // Or a single node
    ]).isRequired, // Children prop is required
  };
