import { useContext } from "react";
import { SortOrderContext } from "./SortOrderContext";

export default function ProductsSort() {
  const {orderBy, changeOrder} = useContext(SortOrderContext)
  return (
    <div className="flex justify-between lg:items-center  flex-col gap-2 lg:gap-0 lg:flex-row">
      <h4 className="text-gray-500">Showing --- results</h4>
      <select
        className="orderby p-2 outline-0 bg-[#F8F6F3]"
        value={orderBy}
        onChange={changeOrder}
      >
        <option>Default Sorting</option>
        <option>Sort by Popularity</option>
        <option>Sort by Average Rating</option>
        <option>Sort by Latest</option>
        <option>Sort by Price: low to high</option>
        <option>Sort by Price: high to low</option>
      </select>
    </div>
  );
}
