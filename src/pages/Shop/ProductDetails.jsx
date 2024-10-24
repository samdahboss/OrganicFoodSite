import { useParams, Link } from "react-router-dom";
import categories from "../../utils/ShopNavCategoriesList";
import allProducts from "../../utils/AllProducts";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";

export default function ProductDetails() {
  const { index } = useParams();
  const currentProduct = allProducts[parseInt(index)];
  const [reviews, setReviews] = useState(false);
  const [description, setDescription] = useState(true);
  const toggleInfo = () => {
    setDescription((prevDescription) => !prevDescription);
    setReviews((prevReviews) => !prevReviews);
  };
  return (
    <div className=" px-6 bg-[#F8F6F3]">
      <div className="container lg:flex pt-16 pb-12 px-6">
        <div className="lg:w-1/2">
          <img src={currentProduct.image} className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:ps-12">
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
          <ul className="flex box-border ">
            <li
              className={`p-2 cursor-pointer flex items-end font-bold box-border ${
                description ? "border-greenColor border-t-[5px]" : ""
              }`}
              onClick={toggleInfo}
            >
              Description
            </li>
            <li
              className={`p-2 cursor-pointer flex items-end box-border font-bold ${
                reviews ? "border-greenColor border-t-[5px]" : ""
              }`}
              onClick={toggleInfo}
            >
              Reviews(0)
            </li>
          </ul>
        </div>
        {description && (
          <p>
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        )}
        {reviews && (
          <div>
            <p>There are no reviews yet.</p>
            <form className="border-[1px] mt-12 p-6 flex flex-col gap-4 text-gray-700">
              <h1 className="text-[22px]">
                Be the first to review “Assorted Coffee”
              </h1>
              <h2>
                Your email address will not be published. Required fields are
                marked *
              </h2>
              <div className="flex">
                <label className="text-[21px]" htmlFor="rating">Your rating*</label>
                <div className="flex items-center" id="rating">
                  <span className=" text-lg flex">
                    {Array(5)
                      .fill(<FaRegStar />)
                      .map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                  </span>
                </div>
              </div>
              <div className="">
                <label className="text-[21px]" htmlFor="review">Your Review*</label>
                <textarea className="w-full h-20 border-dotted border-[1px] outline-none p-3" id="review"></textarea>
              </div>
              <div className="lg:flex gap-4">
                <div className="lg:w-1/2 flex flex-col">
                  <label htmlFor="name">Name*</label>
                  <input id="name" className="outline-0  p-4" />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <label htmlFor="email">Email*</label>
                  <input id="email" className="outline-0 p-4" />
                </div>
              </div>
              <label htmlFor="checkbox" className="gap-2 flex">
                <input type="checkbox" id="checkbox"/>
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
              <button className="w-[150px] rounded-lg bg-greenColor text-white p-3 text-sm font-semibold">SUBMIT</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
