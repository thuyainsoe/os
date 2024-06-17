const PopularItemCard = ({ shirt }) => {
  return (
    <div
      className="aspect-[216_/_265] flex flex-col gap-[15px] justify-center items-center 
                max-w-[15.8823%] 2xl:min-w-[15.8823%] p-[10px] pb-[15px] border 
                border-[#F2F2F2] border-solid rounded-[4px]"
    >
      <div className="aspect-[196_/_180] w-full min-h-[200px]">
        <img className="w-full h-full object-cover" src={shirt.image} alt="" />
      </div>
      <div className="flex flex-col gap-[15px] items-center justify-center">
        <span className="text-[14px] font-[500]">{shirt.name}</span>
        <span className="text-[12px] font-[400]">From MMK {shirt.price}</span>
      </div>
    </div>
  );
};

export default PopularItemCard;
