import ReactStars from "react-rating-stars-component";
import shopLogo1 from "@/assets/images/mock-images/shop1.png";
import priceTag from "@/assets/images/common-icons/price-tag.svg";
import { Link } from "react-router-dom";
const ShopDetailCard = () => {
  return (
    <div className="aspect-[440_/_385] p-[15px] border border-lightgray flex flex-col gap-[15px]">
      <div className="flex items-start justify-between">
        <img
          className="w-[100px] h-[100px] rounded-[50%]"
          src={shopLogo1}
          alt=""
        />
        <Link 
          to={`/shops/1`}
          className="w-[87px] h-[31px] border border-primary text-primary rounded-[4px] text-[14px] flex items-center justify-center">
          View Shop
        </Link>
      </div>

      <div className="p-[10px]">
        <div className="flex flex-col gap-[10px] pb-[10px]">
          <span className="text-[18px] font-[700]">H & M</span>
          <ReactStars size={14} />
          <span className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Placerat arcu
          </span>
        </div>

        <div className="flex flex-col gap-[10px] pt-[10px] border-t border-lightgray">
          <span className="text-[14px] font-[500]">
            Availiable Items in shop
          </span>
          <div className="flex flex-wrap gap-[10px]">
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Shirt
            </span>
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Shoes
            </span>
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Sneakers
            </span>
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Skirt
            </span>
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Jumpsuit
            </span>
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Sneakers
            </span>
            <span className="w-fit py-[3px] px-[8px] bg-[#F5E7FF] text-primary text-[12px] rounded-[4px]">
              Sneakers
            </span>
          </div>
          <span className="flex items-center gap-[5px]">
            <img src={priceTag} alt="price tag" />
            Items price starting from 10,000 MMK.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailCard;
