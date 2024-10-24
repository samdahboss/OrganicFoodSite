import ProductDetailsLanding from "./ProductDetailsLanding";
import UserReview from "./UserReview";
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
      <ProductDetailsLanding />
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
        {reviews && <UserReview />}
      </div>
    </div>
  );
}
