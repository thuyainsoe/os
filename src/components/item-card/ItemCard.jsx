import cartIcon from "@/assets/images/common-icons/cart-icon.svg";
const ItemCard = ({ shirt }) => {
  return (
    <div
      className="aspect-[248_/_405] p-[10px]
        flex flex-col gap-[15px] border border-solid border-[#F2F2F2]"
    >
      <div className="w-full">
        <img className="w-full" src={shirt.image} alt="" />
      </div>
      <div className="flex flex-col float-start gap-[15px]">
        <span className="text-[14px] font-[500]">{shirt.name}</span>
        <span className="text-[16px] font-[700]">MMK {shirt.price}</span>
      </div>
      <div>
        <button className="w-full bg-primary flex items-center justify-center h-[36px] text-white gap-[5px] rounded-[50px]">
          <img src={cartIcon} alt="" />
          <span>Add to Cart</span>
        </button>
        <button className="w-full h-[36px]">View Detail</button>
      </div>
    </div>
  );
};

export default ItemCard;
