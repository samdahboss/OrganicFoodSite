import ProductsSort from "./ProductsSort";
import ProductsSale from "./ProductsSale";
import PropTypes from 'prop-types'
import ProductsCountProvider from "./ProductsCountContext";

export default function ShopProductDisplay({directory, sectionName}) {
  return (
    <div className="shop-nav lg:ps-12 lg:w-3/4">
      <div className="flex flex-col">
        <h3 className="text-gray-500 py-1">{directory}</h3>
        <h1 className="text-[52px] font-merriweather font-bold text-greenColor mt-4">
          {sectionName}
        </h1>
        <div className="mt-6">
          <ProductsCountProvider>
            <ProductsSort />
            <ProductsSale />
          </ProductsCountProvider>
        </div>
      </div>
    </div>
  );
}

ShopProductDisplay.propTypes ={
  directory: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired
}
