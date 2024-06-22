import { useRef } from "react";
import shirtMock5 from "@/assets/images/mock-images/shirt-mock5.png";

const OrderConfirmation = ({ dialogButtonHandler }) => {
  const innerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (innerRef.current && !innerRef.current.contains(e.target)) {
      dialogButtonHandler(false);
    }
  };
  return (
    <div
      className="fixed top-0 left-0 h-[100vh] w-full bg-[#0000007a] z-[200] flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        ref={innerRef}
        className="w-[863px] h-[788px] bg-white p-[40px] rounded-[4px]"
      >
        <div className="w-full flex items-center justify-center flex-col gap-[10px]">
          <h4 className="text-[28px] font-[700] text-[#4A4A4A]">
            Order Confirmation
          </h4>
          <span className="text-[16px] text-[#828282]">
            Please check the items before you confirm you order.
          </span>
        </div>
        <div className="flex  justify-between w-full text-primary text-[16px] mt-[30px]">
          <div className="w-[47%] flex flex-col gap-[20px]">
            <div>
              <span className="w-[150px] inline-block">Ordered By:</span>
              <span>Thiri Soe Man</span>
            </div>
            <div>
              <span className="w-[150px] inline-block">Contact Number:</span>
              <span>09757475674</span>
            </div>
          </div>
          <div className="w-[47%] flex flex-col gap-[20px]">
            <div>
              <span className="w-[150px] inline-block">Payment Method:</span>
              <span>Cash on Delivery</span>
            </div>
            <div className="flex">
              <span className="min-w-[150px] inline-block text-nowrap">
                Delivery Address:
              </span>
              <span className="inline-block">
                No. 62, Minn Street, Sanchaung Township, Yangon
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-[20px] py-[20px] border-t border-[#f2f2f2]">
          {/* Item Card */}
          <div className="flex">
            <div className="w-[533px]">
              <div className="flex items-center gap-[15px]">
                <img
                  className="w-[80px] h-[80px] border border-primary rounded-[4px]"
                  src={shirtMock5}
                  alt=""
                />
                <div className="flex flex-col gap-[10px]">
                  <span className="font-[700]">Shirt</span>
                  <span className="text-[#4A4A4A]">Medium . Blue</span>
                </div>
              </div>
            </div>
            <div className="w-[250px] flex justify-between items-center">
              <span>1</span>
              <span>25000</span>
            </div>
          </div>
          <div className="flex mt-[20px]">
            <div className="w-[533px]">
              <div className="flex items-center gap-[15px]">
                <img
                  className="w-[80px] h-[80px] border border-primary rounded-[4px]"
                  src={shirtMock5}
                  alt=""
                />
                <div className="flex flex-col gap-[10px]">
                  <span className="font-[700]">Shirt</span>
                  <span className="text-[#4A4A4A]">Medium . Blue</span>
                </div>
              </div>
            </div>
            <div className="w-[250px] flex justify-between items-center">
              <span>1</span>
              <span>25000</span>
            </div>
          </div>
        </div>
        {/* calculation */}
        <div className="flex flex-col gap-[20px]  py-[20px] border-t border-b border-[#F2F2F2]">
          <div className="flex">
            <span className="flex justify-end min-w-[560px] pr-[20px]">
              Subtotal
            </span>
            <span className="w-full flex justify-end">50000</span>
          </div>
          <div className="flex">
            <span className="flex justify-end min-w-[560px] pr-[20px]">
              Discount
            </span>
            <span className="w-full flex justify-end">0</span>
          </div>
          <div className="flex">
            <span className="flex justify-end min-w-[560px] pr-[20px]">
              Tax
            </span>
            <span className="w-full flex justify-end">0</span>
          </div>
        </div>
        {/* total */}
        <div className="flex pt-[20px]">
          <span className="flex justify-end min-w-[560px] pr-[20px]">
            Total
          </span>
          <span className="w-full flex justify-end">50000</span>
        </div>
        {/* buttons */}
        <div className="w-full flex justify-between mt-[30px]">
          <button
            className="w-[381px] h-[40px] flex items-center justify-center
                    text-[#4A4A4A] rounded-[50px] border border-primary"
            onClick={() => {
              dialogButtonHandler(false);
            }}
          >
            Cancel
          </button>
          <button
            className="w-[381px] h-[40px] flex items-center justify-center text-white bg-primary
                            rounded-[50px]"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
