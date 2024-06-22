import shirtMock5 from "@/assets/images/mock-images/shirt-mock5.png";
import deleteIcon from "@/assets/images/common-icons/delete-icon.svg";

const CartItemCard = () => {
  return (
    <div className="w-full mt-[10px] flex h-[100px] items-center">
      <div className="w-[10.4408%] ">
        <input
          className="w-[52px] h-[30px] pl-[20px] border border-[#f2f2f2]"
          type="number"
          defaultValue={1}
        />
      </div>
      <div className="w-[58.0046%] flex items-center gap-[15px]">
        <div className="w-[80px] h-[80px] border border-primary">
          <img className="w-full h-full object-cover" src={shirtMock5} alt="" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-[700]">Shirt</span>
          <span>Medium . Blue</span>
        </div>
      </div>
      <div className="w-[26.9142%]">
        25000 <span className="text-[#AAAAAA]">MMK</span>
      </div>
      <div className="w-[4.6404%]">
        <img className="cursor-pointer" src={deleteIcon} alt="" />
      </div>
    </div>
  );
};

export default CartItemCard;
