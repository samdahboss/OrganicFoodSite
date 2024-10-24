import { FaRegStar } from "react-icons/fa";
export default function UserReview() {
  return (
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
  )
}
