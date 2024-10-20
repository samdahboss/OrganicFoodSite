import ShopNav from "../Shop/ShopNav";
import ShopProductDisplay from "../Shop/ShopProductDisplay";
import SortOrderProvider from "../Shop/SortOrderContext";
import FilterContextProvider from "../Shop/FilterProductsContext";

export default function Groceries() {
  return (
    <section className="py-16 px-12 bg-[#F8F6F3] flex lg:flex-row flex-col-reverse">
      <SortOrderProvider>
        <FilterContextProvider>
          <ShopNav />
          <ShopProductDisplay directory="Shop/Groceries" sectionName="Groceries"/>
        </FilterContextProvider>
      </SortOrderProvider>
    </section>
  );
}
