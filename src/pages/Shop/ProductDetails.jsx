import { useParams, Link } from "react-router-dom";
import categories from "../../utils/ShopNavCategoriesList";
import allProducts from "../../utils/AllProducts";
// import { useContext } from "react";
// import { FilterContext } from "./FilterProductsContext";
import { useState } from "react";

export default function ProductDetails() {
  const { index } = useParams();
  // const {setCategories} = useContext(FilterContext)
  const currentProduct = allProducts[parseInt(index)];
  const [reviews, setReviews] = useState(false)
  const [description, setDescription] = useState(true)
  const toggleInfo =()=>{
    setDescription(prevDescription => !prevDescription)
    setReviews(prevReviews => !prevReviews)
  }
  return (
    <div className=" px-6 bg-[#F8F6F3]">
      <div className="container flex pt-16 pb-12 px-6">
        <div className="w-1/2">
          <img src={currentProduct.image} className="w-full" />
        </div>
        <div className="w-1/2 ps-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-[30px] font-merriweather font-bold">
              {currentProduct.title}
            </h1>
            <div className="flex gap-2">
              <h1 className="text-[24px] font-merriweather font-bold">
                £{currentProduct.price}.00
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
                defaultValue={1}
                className="w-[50px] border flex justify-center p-3 "
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
      <div className="container px-6 border-t-[2px] flex flex-col gap-4 pb-12">
        <div>
          <ul className="flex ">
            <li className="p-2 hover:border-t-[5px] hover:border-greenColor hover:pt-1 cursor-pointer font-bold"
            onClick={toggleInfo}>
              Description
            </li>
            <li className="p-2 hover:border-t-[5px] hover:border-greenColor hover:pt-1 font-bold cursor-pointer" 
            onClick={toggleInfo}>
              Reviews(0)
            </li>
          </ul>
        </div>
        {(description && <p>
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          numquam eius modi tempora incidunt lores ta porro ame.
        </p>)}
        {(reviews &&
          <h1>review</h1>
        )}

      </div>
    </div>
  );
}
