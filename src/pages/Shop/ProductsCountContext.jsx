import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import allProducts from "../../utils/AllProducts";
import { SortOrderContext } from "./SortOrderContext";
import { FilterContext } from "./FilterProductsContext";

export const ProductsCountContext = createContext();

export default function ProductsCountProvider({ children }) {
    const { sortOrder } = useContext(SortOrderContext);
    const { handleFilter } = useContext(FilterContext);

    const itemsPerPage = 9;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allProducts.length / itemsPerPage);

    const productsOnPage = allProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const filteredProducts = productsOnPage.filter(handleFilter);

    // const  ;
    const sortedProducts = filteredProducts.sort(sortOrder);

    return (
        <ProductsCountContext.Provider
            value={{ currentPage, setCurrentPage, totalPages, sortedProducts }}
        >
            {children}
        </ProductsCountContext.Provider>
    );
}

ProductsCountProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), // Children can be an array of nodes
        PropTypes.node, // Or a single node
    ]).isRequired, // Children prop is required
};
