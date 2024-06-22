import CartItemCard from "@/components/cart-item-card/CartItemCard";
import burgerLogo from "@/assets/images/common-icons/burger-logo-primary.svg";
import ViewSwitcher from "@/components/view-switcher/ViewSwitcher.jsx";
import CartItemAddress from "@/components/cart-item-address/CartItemAddress";
import OrderConfirmation from "@/components/order-confirmation/OrderConfirmation";
import { useState } from "react";
import OrderSuccessDialog from "@/components/order-success-dlalog/OrderSuccessDialog";

const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confirm, setIsConfirm] = useState(false);

  const handleConfirm = (type) => {
    setIsConfirm(type);
  };
  const dialogButtonHandler = (type) => {
    setIsVisible(type);
  };

  return (
    <div className="my-[40px]">
      <div className="container-md flex flex-col gap-[30px]">
        <h3 className="text-primary text-[20px] font-[700]">
          You Shopping Cart
        </h3>
        <div className="flex justify-between">
          {/* left section */}
          <div className="w-[63.3823%]">
            {/* title */}
            <div className="w-full h-[50px] flex items-center text-[14px] text-[#4A4A4A] border-b border-[#F2F2F2]">
              <span className="w-[10.4408%] h-full flex items-center justify-start">
                Quantity
              </span>
              <span className="w-[58.0046%] h-full flex items-center justify-start">
                Item Name
              </span>
              <span className="w-[26.9142%] h-full flex items-center justify-start">
                Price
              </span>
            </div>
            {/* item container */}
            <div className="w-full">
              {[...Array(3)].map((_, index) => (
                <CartItemCard key={index} />
              ))}
            </div>
            {/* Calculation Section */}
            <div>
              {/* Sub Total */}
              <div className="pt-[10px] mt-[10px] border-t border-[#F2F2F2] flex items-center">
                <span className="h-[40px] w-[67.8654%] flex items-center justify-end pr-[50px] font-[700]">
                  Subtotal
                </span>
                <span className="h-[40px] w-[16.6775%] flex items-center gap-[5px] font-[700]">
                  50000 <span className="text-[#AAAAAA] !font-[400]">MMK</span>
                </span>
              </div>
              {/* Discount */}
              <div className="flex items-center">
                <span className="h-[40px] w-[67.8654%] flex items-center justify-end pr-[50px] font-[700]">
                  Discount
                </span>
                <span className="h-[40px] w-[16.6775%] flex items-center gap-[5px] font-[700]">
                  0 <span className="text-[#AAAAAA] !font-[400]">MMK</span>
                </span>
              </div>
              {/* Tax */}
              <div className="flex items-center pb-[10px] border-b border-[#f2f2f2]">
                <span className="h-[40px] w-[67.8654%] flex items-center justify-end pr-[50px] font-[700]">
                  Tax
                </span>
                <span className="h-[40px] w-[16.6775%] flex items-center gap-[5px] font-[700]">
                  0 <span className="text-[#AAAAAA] !font-[400]">MMK</span>
                </span>
              </div>
              {/* Total Amount */}
              <div className="flex items-center">
                <span className="h-[40px] w-[67.8654%] flex items-center justify-end pr-[50px] font-[700]">
                  Total Amount
                </span>
                <span className="h-[40px] w-[16.6775%] flex items-center gap-[5px] font-[700]">
                  50000 <span className="text-[#AAAAAA] !font-[400]">MMK</span>
                </span>
              </div>
            </div>
            {/* two buttons */}
            <div className="w-full mt-[30px] flex items-center justify-between">
              <button className="w-[48.8399%] border border-primary text-primary h-[40px] flex items-center justify-center rounded-[50px]">
                Find More Items
              </button>
              <button
                className="w-[48.8399%] h-[40px] rounded-[50px] bg-primary text-white"
                onClick={() => {
                  setIsVisible(true);
                }}
              >
                Continue to check out
              </button>
              {isVisible && (
                <OrderConfirmation
                  dialogButtonHandler={dialogButtonHandler}
                  handleConfirm={handleConfirm}
                />
              )}
              {confirm && <OrderSuccessDialog handleConfirm={handleConfirm} />}
            </div>
          </div>
          {/* right section */}
          <div className="w-[33.6765%] px-[20px] py-[30px] border border-primary rounded-[4px]">
            <CartItemAddress />
          </div>
        </div>
      </div>
      <div>
        <div className=" container-md flex items-center gap-[5px] w-full h-[35px my-[40px]">
          <img src={burgerLogo} alt="" />
          <span className="text-[700] text-primary">You may also like</span>
        </div>
        <ViewSwitcher isGrid={true} />
      </div>
    </div>
  );
};

export default Cart;
