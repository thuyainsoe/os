import categoryIcon from "@/assets/images/common-icons/category-primary.svg";
import searchIcon from "@/assets/images/common-icons/search-input-icon.svg";
import CategoryCard from "../../components/category-card/CategoryCard";
import shirtMock2 from "@/assets/images/mock-images/shirt-mock2.png";
import shirtMock3 from "@/assets/images/mock-images/shirt-mock3.png";
import shirtMock4 from "@/assets/images/mock-images/shirt-mock4.png";
import shirtMock5 from "@/assets/images/mock-images/shirt-mock5.png";
import m1 from "@/assets/images/mock-images/m1.png";
import m2 from "@/assets/images/mock-images/m2.png";
import m3 from "@/assets/images/mock-images/m3.png";
import m4 from "@/assets/images/mock-images/m4.png";
import m5 from "@/assets/images/mock-images/m5.png";
import m6 from "@/assets/images/mock-images/m6.png";
import m7 from "@/assets/images/mock-images/m7.png";

const mockCategoryItems = [
  {
    id: 1,
    images: [shirtMock2, shirtMock3, shirtMock4, shirtMock5],
    name: "Vintage Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur. Placerat arcu non varius lacus vitae morbi integer.",
    price: 10000,
  },
  {
    id: 2,
    images: [m4, m5, m6, m7],
    name: "Vintage Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur. Placerat arcu non varius lacus vitae morbi integer.",
    price: 10000,
  },
  {
    id: 3,
    images: [m7, m2, shirtMock5, m1],
    name: "Vintage Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur. Placerat arcu non varius lacus vitae morbi integer.",
    price: 10000,
  },
  {
    id: 4,
    images: [m3, m2, m7, m1],
    name: "Vintage Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur. Placerat arcu non varius lacus vitae morbi integer.",
    price: 10000,
  },
  {
    id: 5,
    images: [m1, shirtMock3, shirtMock4, m3],
    name: "Vintage Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur. Placerat arcu non varius lacus vitae morbi integer.",
    price: 20000,
  },
];

const Categories = () => {
  return (
    <div>
      {/* top bar */}
      <div className="container-md flex w-full justify-between my-[20px]">
        <div className="flex items-center gap-[5px]">
          <img src={categoryIcon} alt="" />
          Categories
        </div>
        <div className="flex gap-[12px] items-center w-[300px] border border-lightgray h-[36px] px-[20px] rounded-[100px]">
          <img className="w-[24px] h-[24px]" src={searchIcon} alt="" />
          <input
            className="input-reset w-full"
            type="text"
            placeholder="Search by categories"
          />
        </div>
      </div>

      {/* all items */}
      <div className="flex flex-row flex-wrap gap-[20px] container-md my-[20px]">
        {mockCategoryItems.map((item) => {
          return <CategoryCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
