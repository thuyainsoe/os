import deliveryIcon from "@/assets/images/common-icons/delivery-car.svg";
import decreseIcon from "@/assets/images/common-icons/decrease-icon.svg";
import increaseIcon from "@/assets/images/common-icons/increas-icon.svg";
import cartIcon from "@/assets/images/common-icons/cart-icon.svg";
import { useState } from "react";

const ItemFullDetail = () => {
  const [itemCount, setItemCount] = useState(1);
  return (
    <>
      {/* first */}
      <div className="flex items-center justify-between">
        <span className="text-[24px] font-[700]">Vintage Shirt</span>
        <div className="flex items-center gap-[5px] text-primary text-[14px]">
          <img src={deliveryIcon} alt="" />
          Cash on Delivery
        </div>
      </div>
      {/* second */}
      <div className="flex items-center gap-[15px] mt-[15px]">
        <span className="w-[82px] h-[26px] rounded-[4px] bg-[#F5E7FF] text-primary text-[12px] flex items-center justify-center">
          Instock Item
        </span>
        <span className="text-[#4A4A4A] text-[14px] italic">
          Only 6 items left
        </span>
      </div>
      {/* third */}
      <div className="flex items-center gap-[15px] my-[30px] pb-[30px] border-b border-[#F2F2F2]">
        <span className="text-[#4a4a4a] font-[500]">150000 MMK</span>
        <span className="text-[#828282] text-[14px] text-line line-through">
          250000 MMK
        </span>
        <span className="text-primary text-[14px]">(30% discount)</span>
      </div>
      {/* fourth choose size */}
      <div className="flex flex-col gap-[10px]">
        <span>Choose Size:</span>
        <div className="flex flex-row gap-[15px] flex-wrap">
          <span
            className="flex items-center justify-center w-fit py-[2px] px-[10px] border
               border-primary text-primary rounded text-[14px]"
          >
            Small
          </span>
          <span
            className="flex items-center justify-center w-fit py-[2px] px-[10px] border
               border-primary text-primary rounded text-[14px]"
          >
            Medium
          </span>
          <span
            className="flex items-center justify-center w-fit py-[2px] px-[10px] border
               border-primary text-primary rounded text-[14px]"
          >
            Large
          </span>
          <span
            className="flex items-center justify-center w-fit py-[2px] px-[10px] border
               border-primary text-primary rounded text-[14px]"
          >
            XL
          </span>
          <span
            className="flex items-center justify-center w-fit py-[2px] px-[10px] border
               border-primary text-primary rounded text-[14px]"
          >
            XXL
          </span>
        </div>
      </div>
      {/* choose color */}
      <div className="flex flex-col gap-[10px] mt-[30px]">
        <div className="flex flex-row">
          <span>Choose Color :</span>
          <span>Blue</span>
        </div>
        <div className="flex flex-row gap-[10px]">
          <span className="w-[36px] h-[36px] rounded-[50%] bg-[#2F80ED]"></span>
          <span className="w-[36px] h-[36px] rounded-[50%] bg-[#FECB00]"></span>
          <span className="w-[36px] h-[36px] rounded-[50%] bg-[#EB5757]"></span>
          <span className="w-[36px] h-[36px] rounded-[50%] bg-[#800080]"></span>
          <span className="w-[36px] h-[36px] rounded-[50%] bg-[#F2994A]"></span>
        </div>
      </div>
      {/* select quantity */}
      <div className="flex flex-col gap-[10px] mt-[30px]">
        <span>Select Quantity</span>
        <div className="flex items-center gap-[30px]">
          <img
            src={decreseIcon}
            className={`cursor-pointer ${itemCount === 1 ? "opacity-30" : ""}`}
            alt=""
            onClick={() => {
              setItemCount((prev) => {
                if (prev === 1) return 1;
                return prev - 1;
              });
            }}
          />
          <span>{itemCount}</span>
          <img
            src={increaseIcon}
            className="cursor-pointer"
            alt=""
            onClick={() => {
              setItemCount((prev) => {
                console.log(prev);
                return prev + 1;
              });
            }}
          />
        </div>
      </div>
      {/* button */}
      <a
        href="#"
        className="my-[30px] flex items-center gap-[10px] w-full bg-primary text-white justify-center rounded-[50px] py-[10px]"
      >
        <img src={cartIcon} alt="" />
        Add to Cart
      </a>
      {/* Additional Details */}
      <div className="flex flex-col gap-[15px]">
        <span>Additional Details</span>
        <ul className="grid grid-cols-[repeat(3,1fr)] list-disc list-inside">
          <li className="text-[14px] font-[400]">
            <span className="ml-[-5px]">Cotton</span>
          </li>
          <li className="text-[14px] font-[400] ">
            <span className="ml-[-5px]">Machine Washable</span>
          </li>
          <li className="text-[14px] font-[400] text-right">
            <span className="ml-[-5px]">Additional Details</span>
          </li>
          <li className="text-[14px] font-[400]">
            <span className="ml-[-5px]">Cotton</span>
          </li>
          <li className="text-[14px] font-[400] ">
            <span className="ml-[-5px]">Machine Washable</span>
          </li>
          <li className="text-[14px] font-[400] text-right">
            <span className="ml-[-5px]">Additional Details</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ItemFullDetail;
