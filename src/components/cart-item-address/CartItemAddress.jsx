import { useState } from "react";
import editIcon from "@/assets/images/common-icons/edit-icon.svg";

const CartItemAddress = () => {
  const [checkCustomAddress, setCheckCustomAddress] = useState(false);
  const [customAddress, setCustomAddress] = useState("");
  const [saveAddress, setSaveAddress] = useState(false);
  return (
    <>
      {/* first block */}
      <div className="flex flex-col pb-[30px] mb-[30px] border-b border-[#F2F2F2]">
        <h3 className="text-primary font-[700] text-[18px]">
          Personal Information
        </h3>
        <div className="flex flex-col gap-[2px] mb-[10px] mt-[20px]">
          <span className="text-[#828282] text-[12px]">Name</span>
          <span className="text-[14px] text-primary font-[500]">
            Thiri Soe Man
          </span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="text-[#828282] text-[12px]">Contact</span>
          <span className="text-[14px] text-primary font-[500]">
            09757475674
          </span>
        </div>
      </div>
      {/* second block */}
      <div className="flex flex-col pb-[30px] mb-[30px] border-b border-[#F2F2F2]">
        <h3 className="text-primary font-[700] text-[18px]">
          Personal Information
        </h3>
        <div className="mt-[10px] text-[12px] text-[#4A4A4A]">
          Currently we only provide cash on delivery payment in our system.
        </div>
        <div className="mt-[20px]">
          <div className="flex gap-[5px] items-center">
            <input type="radio" className="accent-primary" checked />
            <span className="text-[#828282] text-[12px]">
              Default Payment Method
            </span>
          </div>
          <span className="text-primary text-[14px] ml-[18px]">
            Cash on Delivery
          </span>
        </div>
      </div>
      {/* third block */}
      <div>
        <h3 className="text-primary font-[700] text-[18px]">
          Delivery Address
        </h3>
        <div className="mt-[10px] text-[12px] text-[#4A4A4A]">
          Your orders will be delivered to your default address. If you wish to
          deliver to other address, please select custom address and add your
          new delivery address.
        </div>
        <div className="mt-[20px]">
          <div>
            <div className="flex items-center gap-[5px]">
              <input
                type="radio"
                id="default-address"
                name="address-type"
                className="accent-primary cursor-pointer"
                onClick={() => {
                  setCheckCustomAddress(false);
                  setSaveAddress(false);
                  setCustomAddress("");
                }}
                checked={!checkCustomAddress}
              />
              <label
                htmlFor="default-address"
                className="text-[12px] text-[#828282]"
              >
                Default Address
              </label>
            </div>
            <div className="ml-[18px] flex w-[100%-18px] justify-between items-center text-primary text-[14px] font-[500]">
              No. 62, Minn Street, Sanchaung Township, Yangon
              <img className="cursor-pointer" src={editIcon} alt="edit icon" />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex items-center gap-[5px]">
              <input
                type="radio"
                id="custom-address"
                name="address-type"
                className="accent-primary cursor-pointer"
                onClick={() => setCheckCustomAddress(true)}
                checked={checkCustomAddress}
              />
              <label
                htmlFor="custom-address"
                className="text-[12px] text-[#828282]"
              >
                Custom Address
              </label>
            </div>
            <div className="ml-[18px] text-[#828282] text-[14px] font-[500]">
              {!checkCustomAddress ? (
                <span>No address added here</span>
              ) : !saveAddress ? (
                <>
                  <div className="mt-[5px] w-full h-[70px] py-[5px] px-[8px] border border-[#E4E7ED] rounde-[4px]">
                    <textarea
                      className="w-full h-full custom-address-input"
                      placeholder="Enter a custom address"
                      value={customAddress}
                      onChange={(e) => {
                        setCustomAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-full flex items-center justify-end gap-[8px] h-[20px] mt-[10px]">
                    <button
                      className="text-[12px]"
                      onClick={() => {
                        setCustomAddress("");
                        setCheckCustomAddress(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-[12px] text-primary"
                      onClick={() => setSaveAddress(true)}
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <span className="flex w-full justify-between items-center mt-[5px] text-primary text-[14px] font-[500]">
                  {customAddress}
                  <img
                    className="cursor-pointer"
                    src={editIcon}
                    alt="edit icon"
                    onClick={() => {
                      setSaveAddress(false);
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemAddress;
