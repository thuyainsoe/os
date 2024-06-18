import catagoryIcon from "@/assets/images/common-icons/category-primary.svg";
import rightIcon from "@/assets/images/common-icons/right-simple-arrow.svg";
import searchIcon from "@/assets/images/common-icons/search-input-icon.svg";
import filterIcon from "@/assets/images/common-icons/filter-icon.svg";

import ViewSwitcher from "@/components/view-switcher/ViewSwitcher.jsx";
import styles from "./category-detail.module.css";
import { Link, useParams } from "react-router-dom";
import ViewSwitchBtn from "@/components/view-switch-btn/ViewSwitchBtn";
import { useState } from "react";
import FilterBox from "@/components/filter-box/FilterBox";

const CategoryDetail = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [filterBoxShow, isSetFilterBoxShow] = useState(false);
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

  const setFilterClose = (type) => {
    isSetFilterBoxShow(type);
  };

  return (
    <div style={{ contain: "layout" }}>
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
      <div className=" flex items-center justify-between container-md py-[20px] sticky top-[78px] bg-white z-[100] ">
        <div className="flex items-center gap-[20px]">
          {/* filter */}
          <div
            className={styles.filterBtn}
            onClick={() => {
              isSetFilterBoxShow(true);
            }}
          >
            <img src={filterIcon} alt="filter icon" />
            Filter
          </div>
          {/* search */}
          <div
            className={`${styles.searchInput} ${
              filterBoxShow ? styles.active : ""
            }`}
          >
            <img className="w-[24px] h-[24px]" src={searchIcon} alt="" />
            <input
              className="input-reset w-full"
              type="text"
              placeholder="Search by categories"
            />
          </div>
        </div>
        <ViewSwitchBtn setClickedType={setClickedType} isGrid={isGrid} />
        <div
          className={`${styles.fiterBoxWrapper} ${
            filterBoxShow ? styles.active : ""
          }`}
        >
          <FilterBox setFilterClose={setFilterClose} />
        </div>
      </div>
      <div
        className={`${filterBoxShow ? styles.active : ""} ${
          styles.viewSwitcherWrapper
        }`}
      >
        <ViewSwitcher isGrid={isGrid} />
      </div>
    </div>
  );
};

export default CategoryDetail;
