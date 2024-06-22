import { Link, useParams } from "react-router-dom";
import catagoryIcon from "@/assets/images/common-icons/category-primary.svg";
import rightIcon from "@/assets/images/common-icons/right-simple-arrow.svg";
import shirtMock1 from "@/assets/images/mock-images/shirt-mock1.png";
import shirtMock2 from "@/assets/images/mock-images/shirt-mock2.png";
import shirtMock3 from "@/assets/images/mock-images/shirt-mock3.png";
import shirtMock4 from "@/assets/images/mock-images/shirt-mock4.png";
import shirtMock5 from "@/assets/images/mock-images/shirt-mock5.png";
import shopImage from "@/assets/images/mock-images/shop1.png";
import mapImage from "@/assets/images/common-icons/map-image.svg";
import ReactStars from "react-rating-stars-component";
import deliveryCar from "@/assets/images/common-icons/delivery-car.svg";
import returnLogo from "@/assets/images/common-icons/return-logo.svg";
import rightArrow from "@/assets/images/common-icons/right-long-arrow-primary.svg";
import chatLogo from "@/assets/images/common-icons/chats-logo.svg";
import burgerLogo from "@/assets/images/common-icons/burger-logo-primary.svg";
import ViewSwitcher from "@/components/view-switcher/ViewSwitcher.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ItemFullDetail from "@/components/item-full-details/ItemFullDetail";
import ReviewDialogBox from "@/components/review-dialog-box/ReviewDialogBox";
import { useState } from "react";

const images = [
  {
    original: shirtMock1,
    thumbnail: shirtMock1,
  },
  {
    original: shirtMock2,
    thumbnail: shirtMock2,
  },
  {
    original: shirtMock3,
    thumbnail: shirtMock3,
  },
  {
    original: shirtMock4,
    thumbnail: shirtMock4,
  },
  {
    original: shirtMock5,
    thumbnail: shirtMock5,
  },
];

const ItemDetail = () => {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const changeToUpperCase = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const dialogButtonHandler = (type) => {
    setIsVisible(type);
  };
  return (
    <>
      <div className="container-md" id="item-detail">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[20px] my-[20px]">
          <Link to="/categories" className="flex items-center gap-[5px]">
            <img src={catagoryIcon} alt="catagory icon" />
            Categories
          </Link>
          <img src={rightIcon} alt="right icon" />
          <Link
            to={`/categories/${params.category
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {changeToUpperCase(params.category)}
          </Link>
          <img src={rightIcon} alt="right icon" />
          <div>{changeToUpperCase(params.item)}</div>
        </div>
        {/* Detail Container */}
        <div className="flex justify-between">
          <div className="w-[39.8529%] 2xl:w-[33%]">
            <ReactImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              autoPlay={false}
            />
          </div>
          <div className="w-[35.8823%] 2xl:w-[34%]">
            <ItemFullDetail />
          </div>
          <div className="w-[18.3823%] 2xl:w-[25%] flex flex-col gap-[40px]">
            <div className="p-[20px] border-primary border rounded-[4px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                  <span className="text-[20px] font-[700] text-primary">
                    Shop Name
                  </span>
                  <ReactStars
                    count={5}
                    onChange={() => {}}
                    size={14}
                    activeColor="#ffd700"
                  />
                </div>
                <img className="w-[60px] h-[60px]" src={shopImage} alt="" />
              </div>
              <div className="mt-[15px] text-[14px] text-gray">
                Lorem ipsum dolor sit amet consectetur. A facilisi tristique
                ornare pharetra etiam proin orci.{" "}
              </div>
              <div className="mt-[15px] flex flex-row gap-[5px]">
                <img src={mapImage} alt="" />{" "}
                <span className="text-primary text-[14px]">See on map</span>
              </div>
              <div className="flex flex-col gap-[5px] mt-[30px]">
                <div className="flex items-center gap-[5px]">
                  <img src={returnLogo} alt="" />
                  <span className="text-[14px] text-primary">
                    Return Policy
                  </span>
                </div>
                <span className="text-[14px] text-gray">
                  7 Days Return Availiable
                </span>
              </div>
              <div className="flex flex-col gap-[5px] mt-[30px]">
                <div className="flex flex-row gap-[5px]">
                  <img src={deliveryCar} alt="" />
                  <span className="text-[14px] text-primary">
                    Standard Delivery
                  </span>
                </div>
                <span className="text-[14px] text-gray">
                  Instock Item (Within 7 Office Days)
                </span>
              </div>
              <a
                href="#"
                className="flex gap-[5px] w-full rounded-[50px] border border-primary 
              items-center justify-center py-[10px] mt-[40px] text-primary text-[14px]"
              >
                View Shop <img src={rightArrow} alt="" />
              </a>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row justify-between items-center text-[14px] text-primary font-[700]">
                <span>Comments & Feedbacks</span>
                <span>(10)</span>
              </div>
              <a
                className="w-full flex items-center justify-center text-primary border border-primary 
              py-[10px] rounded-[50px] text-[14px] gap-[5px]"
                href="#"
                onClick={() => {
                  setIsVisible(true);
                }}
              >
                <img src={chatLogo} alt="chat logo" />
                View & write a feedback
              </a>
            </div>
            <ReviewDialogBox
              dialogButtonHandler={dialogButtonHandler}
              isVisible={isVisible}
            />
          </div>
        </div>
      </div>
      {/* bottonm  */}
      <div>
        <div className=" container-md flex items-center gap-[5px] w-full h-[35px my-[40px]">
          <img src={burgerLogo} alt="" />
          <span className="text-[700] text-primary">Other related items</span>
        </div>
        <ViewSwitcher isGrid={true} />
      </div>
    </>
  );
};

export default ItemDetail;
