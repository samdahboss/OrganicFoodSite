import { useParams, Link } from "react-router-dom";
import categories from "../../utils/ShopNavCategoriesList";
// import { useContext } from "react";
// import { FilterContext } from "./FilterProductsContext";

export default function ProductDetails() {
  const { name } = useParams();
  // const {setCategories} = useContext(FilterContext)
  
  return (
    <div className=" px-6 bg-[#F8F6F3]">
      {name}
      <div className="container flex py-16 px-6">
        <div className="w-1/2">
          <img src="/coffee-asorted.jpg" className="w-full" />
        </div>
        <div className="w-1/2 ps-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-[30px] font-merriweather font-bold">
              Assorted Coffee
            </h1>
            <div className="flex gap-2">
              <h1 className="text-[24px] font-merriweather font-bold">
                £30.00
              </h1>
              <span className="flex justify-center items-center text-gray-500">    
                +Free Shipping
              </span>
            </div>
            <p className="text-gray-500">
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit, sed quia non incidunt lores ta porro
              ame. numquam eius modi tempora incidunt lores ta porro ame.
            </p>

            <div className="flex gap-4">
              <input
                type="number"
                className="w-[50px] border flex justify-center "
              />
              <button className="bg-darkGreenColor hover:bg-greenColor w-1/2 text-white flex justify-center gap-2 z-40 items-center py-3 px-6 rounded-lg font-semibold">
                ADD TO CART
              </button>
            </div>

            <hr className="bg-gray-500 h-[2px]" />

            <h3 className="flex ">
              <div className="flex items-center">Categories:</div>
              {categories.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  // onClick={() => {
                  //   setCategories(item.category);
                  // }}
                >
                  <div className="ps-4 flex my-2">
                    <h4 className="text-greenColor">{item.category}</h4>
                    <span className="ps-2">({item.quantity})</span>
                  </div>
                </Link>
              ))}
            </h3>
          </div>
        </div>
      </div>
      <div className="container px-6"></div>
    </div>
  );
}
