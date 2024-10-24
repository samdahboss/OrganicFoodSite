import ProductDetailsLanding from "./ProductDetailsLanding";
import UserReview from "./UserReview";
import { useState } from "react";
import { useParams} from "react-router-dom";
import SelectDetailView from "./SelectDetailView";
import allProducts from "../../utils/AllProducts";

export default function ProductDetails() {
  const { index } = useParams();
  const currentProduct = allProducts[parseInt(index)];
  const [reviews, setReviews] = useState(false);
  const [description, setDescription] = useState(true);
  return (
    <div className=" px-6 bg-[#F8F6F3]">
      <ProductDetailsLanding  currentProduct={currentProduct}/>
      <div className="container px-6 border-t-[2px] flex flex-col gap-4 pb-12">
        <SelectDetailView
          description={description}
          reviews={reviews}
          setDescription={setDescription}
          setReviews={setReviews}
        />
        {description && (
          <p>
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        )}
        {reviews && <UserReview currentProduct={currentProduct}/>}
      </div>
    </div>
  );
}
