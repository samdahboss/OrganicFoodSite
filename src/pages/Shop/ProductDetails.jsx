import ProductDetailsLanding from "./ProductDetailsLanding";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";

export default function ProductDetails() {
  const [reviews, setReviews] = useState(false);
  const [description, setDescription] = useState(true);
  const toggleInfo = () => {
    setDescription((prevDescription) => !prevDescription);
    setReviews((prevReviews) => !prevReviews);
  };
  return (
    <div className=" px-6 bg-[#F8F6F3]">
      <ProductDetailsLanding/>
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
