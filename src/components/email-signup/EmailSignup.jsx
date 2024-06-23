import phoneIcon from "@/assets/images/common-icons/phone-icon.svg";
import { useLoginStore } from "@/store/loginStore";
const EmailSignup = () => {
  const username = useLoginStore((state) => state.username);
  const setUsername = useLoginStore((state) => state.setUsername);
  const setSuccessSignIn = useLoginStore((state) => state.setSuccessSignIn);
  const setLoginMethod = useLoginStore((state) => state.setLoginMethod);
  const setClose = useLoginStore((state) => state.setClose);

  return (
    <div className="p-[40px]">
      <h3 className="mb-[30px] text-[#4A4A4A] text-[20px] font-[700]">
        Sign In to your account
      </h3>
      <button
        className="w-full h-[40px] rounded-[50px] text-[#4a4a4a] text-[14px] font-[500] border border-[#F2F2F2]
           flex items-center justify-center gap-[5px]"
        onClick={() => setLoginMethod("phone")}
      >
        <img src={phoneIcon} alt="mail icon" />
        Sign In with Phone Number
      </button>
      <div className="w-full flex items-center gap-[10px] my-[30px] text-[#4A4A4A] text-[14px]">
        <span className="block w-[200px] h-[1px] bg-[#F2F2F2]"></span>
        <span>OR</span>
        <span className="block w-[200px] h-[1px] bg-[#F2F2F2]"></span>
      </div>
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
        <div className="mb-[20px]">
          <label
            className="font-[400] text-[#4A4A4A] text-[14px]"
            htmlFor="email"
          >
            Enter Your Email
          </label>
          <br />
          <input
            className="w-full rounded-[50px] h-[36px] px-[20px] border border-[#F2F2F2] mt-[10px]"
            type="text"
            placeholder="Enter Your Email"
            id="email"
            required
          />
        </div>
        <div className="mb-[20px]">
          <label
            className="font-[400] text-[#4A4A4A] text-[14px]"
            htmlFor="password"
          >
            Enter Your Password
          </label>
          <br />
          <input
            className="w-full rounded-[50px] h-[36px] px-[20px] border border-[#F2F2F2] mt-[10px]"
            type="password"
            placeholder="Enter Your Password"
            id="password1"
            required
          />
        </div>
        <div className="mb-[20px]">
          <label
            className="font-[400] text-[#4A4A4A] text-[14px]"
            htmlFor="password"
          >
            Re - Enter Your Password
          </label>
          <br />
          <input
            className="w-full rounded-[50px] h-[36px] px-[20px] border border-[#F2F2F2] mt-[10px]"
            type="password"
            placeholder="Re - Enter Your Password"
            id="password2"
            required
          />
        </div>
        <button
          className="mt-[20px] w-full h-[40px] rounded-[50px] bg-primary text-white text-[14px] font-[500]
           flex items-center justify-center"
        >
          Sign In
        </button>
      </form>
      <div className="mt-[20px] flex text-[#828282] text-[12px] flex-col items-center justify-center">
        <span>
          By Signing up and logging in, you acknowledge and agree to our{" "}
        </span>
        <div>
          <span className="font-[700]">General Terms of use</span>
          &nbsp; and &nbsp;
          <span className="font-[700]">Policy</span>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
