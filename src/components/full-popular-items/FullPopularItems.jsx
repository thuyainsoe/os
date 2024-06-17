import purpleArrow from "@/assets/images/common-icons/purple-arrow-right.svg";
import PopularItemCard from "@/components/popular-item-card/PopularItemCard";

import shirtMock from "@/assets/images/mock-images/shirt-mock.png";
import shirtMock1 from "@/assets/images/mock-images/shirt-mock1.png";
import shirtMock2 from "@/assets/images/mock-images/shirt-mock2.png";
import shirtMock3 from "@/assets/images/mock-images/shirt-mock3.png";
import shirtMock4 from "@/assets/images/mock-images/shirt-mock4.png";
import shirtMock5 from "@/assets/images/mock-images/shirt-mock5.png";

const mockShirtData = [
  {
    id: "1",
    image: shirtMock,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "2",
    image: shirtMock1,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "3",
    image: shirtMock2,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "4",
    image: shirtMock3,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "5",
    image: shirtMock4,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "6",
    image: shirtMock5,
    name: "Vintage Shirt",
    price: "12000",
  },
];

const FullPopularItems = () => {
  return (
    <div className="container-md py-[40px] w-full flex flex-col gap-[15px]">
      {/* top section */}
      <div className="flex items-center w-full justify-between">
        <h6>Popular Items on shop</h6>
        <button className="text-primary flex items-center gap-[5px]">
          View all popular items
          <img src={purpleArrow} alt="right arrow" />
        </button>
      </div>
      {/* items container */}
      <div className="flex items-center flex-wrap flex-row justify-between">
        {mockShirtData.map((shirt) => {
          return <PopularItemCard shirt={shirt} key={shirt.id} />;
        })}
      </div>
    </div>
  );
};

export default FullPopularItems;
