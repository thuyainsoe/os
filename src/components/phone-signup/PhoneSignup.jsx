import { PhoneInput } from "react-international-phone";
import OtpInput from "react-otp-input";
import mailIcon from "@/assets/images/common-icons/mail-icon.svg";
import { useState } from "react";
import { useLoginStore } from "@/store/loginStore";

const PhoneSignup = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const username = useLoginStore((state) => state.username);
  const setUsername = useLoginStore((state) => state.setUsername);
  const setLoginMethod = useLoginStore((state) => state.setLoginMethod);
  const setSuccessSignIn = useLoginStore((state) => state.setSuccessSignIn);
  const setClose = useLoginStore((state) => state.setClose);
  return (
    <>
      <div className="p-[40px]">
        <h3 className="mb-[30px] text-[#4A4A4A] text-[20px] font-[700]">
          Sign Up to your account
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSuccessSignIn();
            setClose();
          }}
        >
          <div className="mb-[20px]">
            <label
              className="font-[400] text-[#4A4A4A] text-[14px]"
              htmlFor="signup-username"
            >
              Username
            </label>
            <br />
            <input
              className="w-full rounded-[50px] h-[36px] px-[20px] border border-[#F2F2F2] mt-[10px]"
              type="text"
              placeholder="Enter Username"
              id="signup-username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              className="font-[400] text-[#4A4A4A] text-[14px]"
              htmlFor="phonenumber"
            >
              Enter Your Phone Number
            </label>
            <PhoneInput
              defaultCountry="mm"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </div>
          <div className="w-full mt-[20px]">
            <div className="flex w-full justify-between items-center">
              <label className="font-[400] text-[#4A4A4A] text-[14px]">
                Enter OTP
              </label>
              <span className="text-primary text-[14px cursor-pointer">
                GET OTP
              </span>
            </div>
            <OtpInput
              containerStyle="flex justify-between mt-[10px]"
              inputStyle="border border-[#E4E7ED] rounded-[50px] !w-[49px] h-[36px] text-[#4A4A4A] focus:outline-none"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <button
            className="mt-[20px] w-full h-[40px] rounded-[50px] bg-primary text-white text-[14px] font-[500]
           flex items-center justify-center"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center gap-[10px] my-[30px] text-[#4A4A4A] text-[14px]">
          <span className="block w-[200px] h-[1px] bg-[#F2F2F2]"></span>
          <span>OR</span>
          <span className="block w-[200px] h-[1px] bg-[#F2F2F2]"></span>
        </div>
        <button
          className="w-full h-[40px] rounded-[50px] text-[#4a4a4a] text-[14px] font-[500] border border-[#F2F2F2]
           flex items-center justify-center gap-[5px]"
          onClick={() => setLoginMethod("email")}
        >
          <img src={mailIcon} alt="mail icon" />
          Sign In with Email Account
        </button>
        <div className="mt-[20px] flex text-[#828282] text-[12px] flex-col items-center justify-center">
          <span>
            By Signing up and logging in, you acknowledge and agree to our
          </span>
          <div>
            <span className="font-[700]">General Terms of use</span>
            &nbsp; and &nbsp;
            <span className="font-[700]">Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneSignup;
