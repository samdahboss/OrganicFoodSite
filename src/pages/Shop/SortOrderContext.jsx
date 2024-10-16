import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const SortOrderContext = createContext();

export default function SortOrderProvider({children}) {
    const [orderBy, setOrderBy] = useState("");

  const changeOrder = (event) => {
    setOrderBy(event.target.value);
  };
  
  return (
    <SortOrderContext.Provider value={{orderBy, changeOrder}}>
        {children}
    </SortOrderContext.Provider>
  )
}

SortOrderProvider.propTypes ={
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
        PropTypes.node, // Or a single node
      ]).isRequired, // Children prop is required
}
