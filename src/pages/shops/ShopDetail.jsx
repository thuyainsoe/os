import { Link } from "react-router-dom";
import shopIcom from "@/assets/images/common-icons/shop-icon-primary.svg"
import rightIcon from "@/assets/images/common-icons/right-simple-arrow.svg"
import heartIcom from "@/assets/images/common-icons/heart.svg"
import shopLogo1 from "@/assets/images/mock-images/shop1.png"
import ReactStars from "react-rating-stars-component"

const ShopDetail = () => {
    return (
        <div className="container-md">
            {/* Breadcrumbs */}
            <div className="w-full h-[36px] my-[20px] ">
                <div className="flex items-center gap-x-[20px]">
                    <Link 
                        to={'/shops'}
                        className="flex items-center gap-x-[20px] text-primary font-[700] text-[18px]"
                    >
                        <img src={shopIcom} alt="shop-icom" />
                        Shops
                    </Link>
                    <img src={rightIcon} alt="right icon" />
                    <div className="font-[700] text-[18px] text-textgray">H & M</div>
                </div>
            </div>

            <div className="flex items-center justify-between py-[15px] gap-x-[15px]">
                <div className="w-[100px] h-[100px] rounded-[50%]">
                    <img
                        src={shopLogo1}
                        alt=""
                    />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-[700] text-[18px] text-textgray"> H & M </span>
                            <ReactStars
                                count={5}
                                onChange={() => {}}
                                size={14}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div>
                            <a href="/" className="flex items-center justify-between gap-x-[5px] width-[133px] border rounded-[4px] py-[5px] px-[8px]">
                                <img src={heartIcom} alt="heart icon" />
                                Add to favourite
                            </a>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus eum minus consequuntur numquam unde? Architecto reprehenderit iure molestias natus quisquam dolorem nostrum? Dolores, reprehenderit assumenda tempore molestiae in facere.</p>
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;