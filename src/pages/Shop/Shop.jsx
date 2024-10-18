import ShopNav from "./ShopNav";
import ShopProductDisplay from "./ShopProductDisplay";
import SortOrderProvider from "./SortOrderContext";
import FilterContextProvider from "./FilterProductsContext";

export default function Shop() {
  return (
    <section className="py-16 px-12 bg-[#F8F6F3] flex lg:flex-row flex-col-reverse">
      <SortOrderProvider>
        <FilterContextProvider>
          <ShopNav />
          <ShopProductDisplay />
        </FilterContextProvider>
      </SortOrderProvider>
    </section>
  );
}
