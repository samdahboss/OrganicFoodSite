import { useContext } from "react";
import { SortOrderContext } from "./SortOrderContext";
// import { ProductsCountContext } from "./ProductsCountContext";

export default function ProductsSort() {
  const {orderBy, changeOrder} = useContext(SortOrderContext)
  

  return (
    <div className="flex justify-between lg:items-center  flex-col gap-2 lg:gap-0 lg:flex-row">
      <h4 className="text-gray-500">Showing --- results</h4>
      <select
        className="orderby p-2 outline-0 bg-[#F8F6F3] px-0"
        value={orderBy}
        onChange={changeOrder}
      >
        <option value="">Default Sorting</option>
        <option value="popularity">Sort by Popularity</option>
        <option value="rating">Sort by Average Rating</option>
        <option value="releaseDate">Sort by Latest</option>
        <option value="price-lh">Sort by Price: low to high</option>
        <option value="price-hl">Sort by Price: high to low</option>
      </select>
    </div>
  );
}
