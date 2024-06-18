import logo from "@/assets/images/logo.png";
import phoneIcon from "@/assets/images/common-icons/phone.svg";
const Footer = () => {
  return (
    <div className="w-full h-[280px] bg-primary flex flex-col justify-center items-center py-[30px] text-white gap-[20px]">
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <img className="w-[50px] h-[50px]" src={logo} alt="" />
        <span className="text-[14px]">Online Shop MM</span>
        <span className="text-[12px]">Shop with Us</span>
      </div>

      <button
        className="py-[10px] px-[15px] w-[158px] gap-[5px] h-[36px] flex justify-center items-center
       bg-white text-black rounded-[50px]"
      >
        <img src={phoneIcon} alt="" />
        <span className="text-[14px]">Contact Support</span>
      </button>

      <div>Privacy & Policy | Terms & Conditions</div>
      <div className="text-[14px]">
        &copy; 2024 website name. All rights served
      </div>
    </div>
  );
};

export default Footer;
