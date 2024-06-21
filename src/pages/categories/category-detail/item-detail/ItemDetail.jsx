import { Link, useParams } from "react-router-dom";
import catagoryIcon from "@/assets/images/common-icons/category-primary.svg";
import rightIcon from "@/assets/images/common-icons/right-simple-arrow.svg";
import shirtMock1 from "@/assets/images/mock-images/shirt-mock1.png";
import shirtMock2 from "@/assets/images/mock-images/shirt-mock2.png";
import shirtMock3 from "@/assets/images/mock-images/shirt-mock3.png";
import shirtMock4 from "@/assets/images/mock-images/shirt-mock4.png";
import shirtMock5 from "@/assets/images/mock-images/shirt-mock5.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
  const changeToUpperCase = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
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
      <div className="flex justify-between h-[100vh]">
        <div className="w-[39.8529%] ">
          <ReactImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={false}
          />
        </div>
        <div className="w-[35.8823%] h-[300px] bg-green-500">b</div>
        <div className="w-[18.3823%] h-[300px] bg-blue-500">c</div>
      </div>
    </div>
  );
};

export default ItemDetail;
