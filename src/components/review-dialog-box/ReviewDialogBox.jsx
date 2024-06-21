import { useRef } from "react";

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
          className="w-[600px] h-[700px] bg-white z-[200] shadow-[0px_0px_4px_0px_#0000001A] rounded-[4px]"
        ></div>
      </div>
    )
  );
};

export default ReviewDialogBox;
