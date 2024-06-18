import searchIcon from "@/assets/images/common-icons/search.svg";
import inputCloseIcon from "@/assets/images/common-icons/input-close-icon.svg";
import styles from "./grid-switch-bar.module.css";
import { useState } from "react";
import ViewSwitchBtn from "@/components/view-switch-btn/ViewSwitchBtn.jsx";

const GridSwitchBar = ({ setGridType, isGrid }) => {
  const [seachClick, setSearchClick] = useState(false);
  const setClickedType = (type) => {
    setGridType(type);
  };
  return (
    <div className={`${styles.container} container-md`}>
      {/* left filtered bar */}
      <ul className="flex flex-row gap-[10px] text-[16px] items-center">
        <li className="button-active py-[8px] px-[15px] rounded-[50px]">
          Item 1
        </li>
        <li className="py-[8px] px-[15px] rounded-[50px] border border-[#E0E0E0">
          Item 2
        </li>
        <li className="py-[8px] px-[15px] rounded-[50px] border border-[##E0E0E0]">
          Item 3
        </li>
      </ul>
      {/* right switch bar */}
      <div className="flex flex-row gap-[20px] items-center">
        <div className="relative">
          <div
            className={`${styles.searchIconContainer} ${
              seachClick ? styles.active : ""
            }`}
            onClick={() => {
              setSearchClick(true);
            }}
          >
            <img src={searchIcon} alt="" />
          </div>
          <div
            className={`${styles.searchInput} ${
              seachClick ? styles.active : ""
            }`}
          >
            <input
              className="input-reset"
              type="text"
              placeholder="Search by categories"
            />
            <img
              className="w-[15px] h-[15px] cursor-pointer"
              src={inputCloseIcon}
              alt="close icon"
              onClick={() => {
                setSearchClick(false);
              }}
            />
          </div>
        </div>
        <ViewSwitchBtn setClickedType={setClickedType} isGrid={isGrid} />
      </div>
    </div>
  );
};

export default GridSwitchBar;
