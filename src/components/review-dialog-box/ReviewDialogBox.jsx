import { useRef } from "react";
import profileImage from "@/assets/images/mock-images/small-profile-image.png";
import backIcon from "@/assets/images/common-icons/back-icon.svg";

const ReviewDialogBox = ({ dialogButtonHandler, isVisible }) => {
  const innerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (innerRef.current && !innerRef.current.contains(e.target)) {
      dialogButtonHandler(false);
    }
  };
  return (
    isVisible && (
      <div
        className="w-[100%] h-[100vh] fixed top-0 left-0 flex items-center justify-center bg-[#0000005d] z-[200]"
        onClick={handleClickOutside}
      >
        <div
          ref={innerRef}
          className="w-[600px] h-[700px] bg-white z-[200] shadow-[0px_0px_4px_0px_#0000001A] rounded-[4px] py-[20px] px-[30px]"
        >
          <div className="flex items-center justify-between mb-[30px]">
            <span className="font-[700] text-[20px] text-primary">
              Comment & Feedbacks (10)
            </span>
            <span
              className="text-[#4F4F4F] text-[18px] cursor-pointer"
              onClick={() => {
                dialogButtonHandler(false);
              }}
            >
              Close
            </span>
          </div>
          <div className="max-h-[493px] overflow-y-scroll" id="review-dialog">
            {[...Array(4).keys()].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[10px] py-[20px] border-b border-[#f2f2f2]"
              >
                <div className="flex items-center gap-[10px]">
                  <img
                    className="w-[25px] h-[25px] rounded-[50%]"
                    src={profileImage}
                    alt=""
                  />
                  <span className="text-[16px] font-[500] text-primary">
                    Susan
                  </span>
                  <span className="text-[14px] text-[#828282]">1 day ago</span>
                </div>
                <div className="text-[14px] text-[#4A4A4A]">
                  Lorem ipsum dolor sit amet consectetur. A facilisi tristique
                  ornare pharetra etiam proin orci.
                </div>
                <div className="gap-[10px] flex items-center text-[14px] text-[#4A4A4A]">
                  <img src={backIcon} alt="back icon" />
                  Lorem ipsum dolor sit amet consectetur. A facilisi tristique
                  ornare pharetra etiam proin orci.
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[50px] w-full h-[56px] bg-[#F1F1F1] py-[10px] px-[15px] rounded-[4px]">
            <input
              type="text"
              className="review-dialog-input"
              placeholder="Give a feedback here ..."
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ReviewDialogBox;
