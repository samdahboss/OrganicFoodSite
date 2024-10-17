import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const SortOrderContext = createContext();

export default function SortOrderProvider({children}) {
    const [orderBy, setOrderBy] = useState("");

  const changeOrder = (event) => {
    setOrderBy(event.target.value);
  };
  
  // let sortCriteria = ""
  // useEffect(()=>{
  //   switch(orderBy){
  //     case "Sort by Popularity":
  //       sortCriteria="popularity"
  //   }
  // },[orderBy])
  
  const sortOrder =(a,b)=>{
    return b.price - a.price;
  }
  return (
    <SortOrderContext.Provider value={{orderBy, changeOrder, sortOrder}}>
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
