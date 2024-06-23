/* eslint-disable react/no-unescaped-entities */
import largeShopLogo from "@/assets/images/common-icons/large-shop-logo.svg";

import "react-international-phone/style.css";
import { useRef } from "react";
import { useLoginStore } from "@/store/loginStore";
import PhoneSignup from "@/components/phone-signup/PhoneSignup";
import EmailSignup from "@/components/email-signup/EmailSignup";

const LoginInputDialog = () => {
  const innerRef = useRef(null);
  const setClose = useLoginStore((state) => state.setClose);
  const loginMethod = useLoginStore((state) => state.loginMethod);

  const handleClickOutside = (e) => {
    if (innerRef.current && !innerRef.current.contains(e.target)) {
      setClose();
    }
  };
  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-[100vh] bg-[#0000005d] z-[200]"
      onClick={handleClickOutside}
    >
      <div
        ref={innerRef}
        className="w-[874px] h-fit rounded-[4px] shadow-[0px_0px_4px_0px_#00000040] flex bg-white text-black"
      >
        {/* left section */}
        <div className="w-[350px] bg-[#662C911A] pt-[120px] px-[20px] pb-[40px] flex flex-col justify-between">
          <div className="flex items-center flex-col gap-[20px] justify-center">
            <img src={largeShopLogo} alt="" />
            <div className="flex items-center flex-col justify-center gap-[6px]">
              <span className="text-primary font-[500] text-[18px]">
                OnlineShopMM
              </span>
              <span className="text-primary text-[14px] font-[300]">
                Shop with Us
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-[10px]">
            <span className="text-[14px] font-[400] text-primary">
              {/* {isSignIn ? (
                <span>Don't have an account?</span>
              ) : (
                
              )} */}
              <span>Already have an account?</span>
            </span>
            <span className="font-[700] text-[14px] text-primary cursor-pointer">
              {/* {isSignIn ? "Sign Up" : "Log In"} */}
              Login
            </span>
          </div>
        </div>
        {/* right section */}
        {loginMethod === "phone" ? <PhoneSignup /> : <EmailSignup />}
      </div>
    </div>
  );
};

export default LoginInputDialog;
