import shopIcon from "@/assets/images/common-icons/shop-icon-primary.svg";
import SearchInput from "@/components/search-input/SearchInput";
import ShopDetailCard from "@/components/shop-detail-card/ShopDetailCard";

const Shops = () => {
  return (
    <div>
      <div className="flex w-full container-md justify-between items-center h-[37px] my-[20px]">
        <div className="flex items-center gap-[5px] w-[65px] h-[21px]">
          <img src={shopIcon} alt="" />
          <span className="text-primary text-[18px] font-[800]">Shop</span>
        </div>
        <SearchInput />
      </div>

      <div className="container-md grid grid-cols-[repeat(auto-fit,minmax(410px,1fr))] gap-[15px] pb-[20px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <ShopDetailCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shops;
