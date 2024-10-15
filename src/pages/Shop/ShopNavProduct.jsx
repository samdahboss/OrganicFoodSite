import PropTypes from "prop-types";

export default function ShopNavProduct({
  imageUrl,
  productName,
  realPrice,
  discountPrice,
  sale,
}) {
  return (
    <div className="px-2 pb-4">
      <div className="flex flex-col relative">
        {sale && (
          <div className="rounded-full border-black  absolute -top-[15px] right-4">
            <h4 className="rounded-full w-[35px] h-[35px] bg-white text-[12px] flex text-center items-center justify-center">Sale!</h4>
          </div>
        )}
        <img src={imageUrl} />
        <h4 className="text-greenColor mt-4">{productName}</h4>
        <div className="mt-2 flex gap-2">
          <div className={` ${sale && "line-through text-gray-300"}`}>
            <span>£</span>
            <span>{realPrice}.00</span>
          </div>
          {sale && (
            <div className="">
              <span>£</span>
              <span>{discountPrice}.00</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ShopNavProduct.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  realPrice: PropTypes.number.isRequired,
  discountPrice: PropTypes.number.isRequired,
  sale: PropTypes.bool.isRequired,
};
