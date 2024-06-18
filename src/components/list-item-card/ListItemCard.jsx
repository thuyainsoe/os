import cartIcon from "@/assets/images/common-icons/cart-icon.svg";
const ListItemCard = ({ shirt }) => {
  return (
    <div className="max-h-[170px] p-[10px] border border-[#F2F2F2] w-full flex justify-between items-center">
      <div className="flex items-center gap-[15px]">
        <div className="h-[150px] w-[164px]">
          <img
            className="w-full h-full object-cover"
            src={shirt.image}
            alt="item"
          />
        </div>
        <div className="flex flex-col gap-[15px] text-[14px]">
          <span className="text-gray">{shirt.name}</span>
          <span className="text-gray">Description</span>
          <span className="font-[700]">MMK {shirt.price}</span>
        </div>
      </div>

      <div className="w-[250px] flex flex-col gap-[15px]">
        <button className="w-full bg-primary flex items-center justify-center h-[36px] text-white gap-[5px] rounded-[50px]">
          <img src={cartIcon} alt="" />
          <span>Add to Cart</span>
        </button>
        <button className="w-full h-[36px]">View Detail</button>
      </div>
    </div>
  );
};

export default ListItemCard;
