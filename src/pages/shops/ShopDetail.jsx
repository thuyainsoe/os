import { Link, useParams } from "react-router-dom";
import shopIcom from "@/assets/images/common-icons/shop-icon-primary.svg"
import rightIcon from "@/assets/images/common-icons/right-simple-arrow.svg"
import shopLogo1 from "@/assets/images/mock-images/shop1.png"

const ShopDetail = () => {
    return (
        <div className="container-md">
            {/* Breadcrumbs */}
            <div className="w-full h-[36px] my-[20px] ">
                <div className="flex items-center gap-x-[20px]">
                    <Link 
                        to={`shops`}
                        className="flex items-center gap-x-[20px] text-primary"
                    >
                        <img src={shopIcom} alt="shop-icom" />
                        Shops
                    </Link>
                    <img src={rightIcon} alt="right icon" />
                    <div>H & M</div>
                </div>
            </div>

            <div className="flex items-center py-[15px]">
                <div>
                    <img
                        className="w-[100px] h-[100px] rounded-[50%]"
                        src={shopLogo1}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;