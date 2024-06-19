import backArrow from "@/assets/images/common-icons/filter-back-arrow-circle.svg";
import downIcon from "@/assets/images/common-icons/down-tiny-icon.svg";
import upIcon from "@/assets/images/common-icons/up-tiny-icon.svg";
import filterIcon from "@/assets/images/common-icons/filter-icon.svg";
import styles from "./filter-box.module.css";
import { useState } from "react";
const itemsTypes = [
  "All",
  "Shirts",
  "Trousers",
  "Jeans",
  "Shoes",
  "Jewellaries",
  "Cosmetics",
];

const gender = ["Unisex", "Male", "Female", "Boy", "Girl"];
const orderBy = [
  "Latest Item",
  "Top Sales",
  "Price Low to High",
  "Price High to Low",
];
const FilterBox = ({ setFilterClose }) => {
  const [isItemTypeShowMore, setIsItemTypeShowMore] = useState(true);
  const [isGenderShowMore, setIsGenderShowMore] = useState(true);
  const [isOrderByShowMore, setIsOrderByShowMore] = useState(true);

  const closeFilterBox = (type) => {
    setFilterClose(type);
  };
  return (
    <>
      {/* filter box */}
      <div className={styles.container}>
        <div className="flex items-center w-full justify-between h-[36px]">
          <div className="flex items-center gap-[5px] cursor-pointer">
            <img src={filterIcon} alt="" />
            Filter
          </div>
          <img
            className="cursor-pointer"
            src={backArrow}
            alt="back arrow"
            onClick={() => closeFilterBox(false)}
          />
        </div>
        <div className={styles.allListBoxContainer}>
          {/* first item type */}
          <div className="flex flex-col gap-[10px]">
            <div>Item Type</div>
            <ul
              style={
                !isItemTypeShowMore
                  ? {
                      height: itemsTypes.length * 40 + "px",
                      transition: "all .3s",
                    }
                  : {}
              }
              className={styles.itemListContainer}
            >
              {/* List items */}

              {itemsTypes.map((item) => {
                return (
                  <li
                    className="flex items-center gap-[5px] h-[40px] py-[8px]"
                    key={item}
                  >
                    <input
                      className="accent-primary"
                      type="checkbox"
                      id="all"
                    />
                    <label htmlFor="all">{item}</label>
                  </li>
                );
              })}
            </ul>
            <span
              className="text-[#828282] text-[14px] cursor-pointer"
              onClick={() => {
                setIsItemTypeShowMore((prev) => !prev);
              }}
            >
              {isItemTypeShowMore ? (
                <div className="flex items-center gap-[5px]">
                  See more item <img src={downIcon} alt="down icon" />
                </div>
              ) : (
                <div className="flex items-center gap-[5px]">
                  See less item <img src={upIcon} alt="down icon" />
                </div>
              )}
            </span>
          </div>
          {/* first item type end */}
          {/* gender start */}
          <div className="flex flex-col gap-[10px]">
            <div>Gender</div>
            <ul
              style={
                !isGenderShowMore
                  ? {
                      height: gender.length * 40 + "px",
                      transition: "all .3s",
                    }
                  : {}
              }
              className={styles.itemListContainer}
            >
              {gender.map((item) => {
                return (
                  <li
                    className="flex items-center gap-[5px] h-[40px] py-[8px]"
                    key={item}
                  >
                    <input
                      type="radio"
                      id="male"
                      name="language"
                      value="male"
                      className="accent-primary"
                    />
                    <label htmlFor="male">{item}</label>
                  </li>
                );
              })}
            </ul>
            <span
              className="text-[#828282] text-[14px] cursor-pointer"
              onClick={() => {
                setIsGenderShowMore((prev) => !prev);
              }}
            >
              {isGenderShowMore ? (
                <div className="flex items-center gap-[5px]">
                  See more item <img src={downIcon} alt="down icon" />
                </div>
              ) : (
                <div className="flex items-center gap-[5px]">
                  See less item <img src={upIcon} alt="down icon" />
                </div>
              )}
            </span>
          </div>
          {/* gender end */}
          {/* orderby start */}
          <div className="flex flex-col gap-[10px]">
            <div>Order By</div>
            <ul
              style={
                !isOrderByShowMore
                  ? {
                      height: orderBy.length * 40 + "px",
                      transition: "all .3s",
                    }
                  : {}
              }
              className={styles.itemListContainer}
            >
              {orderBy.map((item) => {
                return (
                  <li
                    className="flex items-center gap-[5px] h-[40px] py-[8px]"
                    key={item}
                  >
                    <input
                      type="radio"
                      id="male"
                      name="language"
                      value="male"
                      className="accent-primary"
                    />
                    <label htmlFor="male">{item}</label>
                  </li>
                );
              })}
            </ul>
            <span
              className="text-[#828282] text-[14px] cursor-pointer"
              onClick={() => {
                setIsOrderByShowMore((prev) => !prev);
              }}
            >
              {isOrderByShowMore ? (
                <div className="flex items-center gap-[5px]">
                  See more item <img src={downIcon} alt="down icon" />
                </div>
              ) : (
                <div className="flex items-center gap-[5px]">
                  See less item <img src={upIcon} alt="down icon" />
                </div>
              )}
            </span>
          </div>
          {/* orderby end */}
          {/* price start */}
          <div className="flex flex-col gap-[20px]">
            <div>
              Price Range{" "}
              <span className="text-[12px] italic text-darkgray">
                (Enter amount only, eg. 100)
              </span>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter from price"
                  className={styles.priceInput}
                />
                <div className={styles.label}>From Price</div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter to price"
                  className={styles.priceInput}
                />
                <div className={`${styles.label} !w-[54px]`}>To Price</div>
              </div>
            </div>
          </div>
          {/* price end */}
        </div>
      </div>
    </>
  );
};

export default FilterBox;
