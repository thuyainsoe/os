import searchIcon from "@/assets/images/common-icons/search-input-icon.svg";
const SearchInput = () => {
  return (
    <div>
      <div className="flex gap-[12px] items-center w-[300px] border border-lightgray h-[36px] px-[20px] rounded-[100px]">
        <img className="w-[24px] h-[24px]" src={searchIcon} alt="" />
        <input
          className="input-reset w-full"
          type="text"
          placeholder="Search by categories"
        />
      </div>
    </div>
  );
};

export default SearchInput;
