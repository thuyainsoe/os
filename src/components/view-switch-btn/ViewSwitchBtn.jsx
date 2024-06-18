import gridIcon from "@/assets/images/common-icons/grid-icon.svg";
import listIcon from "@/assets/images/common-icons/list-icon.svg";
import styles from "./view-switch-btn.module.css";

const ViewSwitchBtn = ({ setClickedType, isGrid }) => {
  const clickSwitchBtn = (type) => {
    setClickedType(type);
  };
  return (
    <div className="flex items-center gap-[20px]">
      <div
        className={`${styles.viewSwitcher} ${isGrid ? styles.active : ""}`}
        onClick={() => clickSwitchBtn("grid")}
      >
        <img src={gridIcon} alt="" />
        Grid View
      </div>
      <div
        className={`${styles.viewSwitcher} ${!isGrid ? styles.active : ""}`}
        onClick={() => clickSwitchBtn("list")}
      >
        <img src={listIcon} alt="" />
        List View
      </div>
    </div>
  );
};

export default ViewSwitchBtn;
