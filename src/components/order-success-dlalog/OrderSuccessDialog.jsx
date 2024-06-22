import { useRef } from "react";
import success from "@/assets/images/common-icons/success.svg";

const OrderSuccessDialog = ({ handleConfirm }) => {
  const innerRef = useRef(null);
  const handleClickOutside = (e) => {
    if (innerRef.current && !innerRef.current.contains(e.target)) {
      handleConfirm(false);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 h-[100vh] w-full bg-[#0000007a] z-[200] flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        ref={innerRef}
        className="w-[863px] h-[517px] bg-white rounded-[4px] p-[40px] flex flex-col items-center justify-center"
      >
        <img className="mt-[20px]" src={success} alt="success icon" />
        <div className="mt-[30px] text-[28px] text-[#4A4A4A] font-[700]">
          Thank you so much for your purchased!
        </div>
        <span className="mt-[30px] text-[#828282]">
          Your order is confirmed.
        </span>
        <button
          className="h-[40px] w-[500px] rounded-[50px] bg-primary
        flex items-center justify-center text-white text-[14px] mt-[100px]"
        >
          Browse Other Items
        </button>
        <button
          className="h-[40px] w-[500px] rounded-[50px] border border-[#F2F2F2]
        flex items-center justify-center text-[#4A4A4A] text-[14px] mt-[20px]"
        >
          View Order History
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessDialog;
