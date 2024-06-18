import priceRangeIcon from "@/assets/images/common-icons/price-range.svg";
import rightArrowPrimary from "@/assets/images/common-icons/right-long-arrow-primary.svg";

const CategoryCard = ({ item }) => {
  console.log(item);
  return (
    <div
      className="flex gap-[15px] items-center w-[100%] lg:w-[calc(50%-10px)] min-h-[230px]
     p-[10px] border border-lightgray"
    >
      <div className="grid grid-cols-[repeat(2,1fr)] min-w-[205px] h-[205px] gap-[5px]">
        {item?.images.map((img, i) => {
          return (
            <img
              className="max-w-[100px] max-h-[100px] "
              src={img}
              alt=""
              key={i}
            />
          );
        })}
      </div>

      <div className="flex flex-col h-full justify-between py-[10px]">
        <div className="flex flex-col gap-[10px]">
          <span className="font-[700] text-[16px]">{item.name}</span>
          <span>{item.description}</span>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[5px]">
              <img src={priceRangeIcon} alt="" />
              <span>Price Range :</span>
            </div>
            Starting from {item.price} MMK
          </div>
        </div>
        <button className="flex items-center gap-[10px] h-[19px]">
          View Item <img src={rightArrowPrimary} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
