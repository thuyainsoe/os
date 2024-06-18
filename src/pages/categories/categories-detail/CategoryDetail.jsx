import catagoryIcon from "@/assets/images/common-icons/category-primary.svg";
import rightIcon from "@/assets/images/common-icons/right-simple-arrow.svg";
import searchIcon from "@/assets/images/common-icons/search-input-icon.svg";
import filterIcon from "@/assets/images/common-icons/filter-icon.svg";
import ViewSwitcher from "@/components/view-switcher/ViewSwitcher.jsx";
import { Link, useParams } from "react-router-dom";
import ViewSwitchBtn from "@/components/view-switch-btn/ViewSwitchBtn";
import { useState } from "react";

const CategoryDetail = () => {
  const [isGrid, setIsGrid] = useState(true);
  const params = useParams();
  const category = params.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const setClickedType = (type) => {
    if (type === "grid") {
      setIsGrid(true);
      return;
    }
    setIsGrid(false);
  };

  return (
    <>
      <div className="flex justify-between w-full h-[36px] my-[20px] items-center container-md ">
        <div className="flex items-center gap-[20px]">
          <Link to="/categories" className="flex items-center gap-[5px]">
            <img src={catagoryIcon} alt="catagory icon" />
            Categories
          </Link>
          <img src={rightIcon} alt="right icon" />
          <div>{category}</div>
        </div>
        <div></div>
      </div>
      {/* filter bar */}
      <div className="flex items-center justify-between container-md py-[20px] sticky top-[78px] bg-white">
        <div className="flex items-center gap-[20px]">
          {/* filter */}
          <div
            className="flex items-center justify-center gap-[5px] w-[85px] h-[36px] py-[8px] px-[15px] rounded-[50px]
           border border-lightgray text-[14px]"
          >
            <img src={filterIcon} alt="filter icon" />
            Filter
          </div>
          {/* search */}
          <div className="flex gap-[12px] items-center w-[500px] border border-lightgray h-[36px] px-[20px] rounded-[100px]">
            <img className="w-[24px] h-[24px]" src={searchIcon} alt="" />
            <input
              className="input-reset w-full"
              type="text"
              placeholder="Search by categories"
            />
          </div>
        </div>
        <ViewSwitchBtn setClickedType={setClickedType} isGrid={isGrid} />
      </div>
      <ViewSwitcher isGrid={isGrid} />
    </>
  );
};

export default CategoryDetail;
