import ItemCard from "@/components/item-card/ItemCard";
import ListItemCard from "@/components/list-item-card/ListItemCard";
import style from "./view-switcher.module.css";
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
  {
    id: "7",
    image: shirtMock3,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "8",
    image: shirtMock4,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "9",
    image: shirtMock5,
    name: "Vintage Shirt",
    price: "12000",
  },
  {
    id: "10",
    image: shirtMock1,
    name: "Vintage Shirt",
    price: "12000",
  },
];

const ViewSwitcher = ({ isGrid }) => {
  return (
    <div
      className={`${
        isGrid ? style.gridContainer : style.listContainer
      } container-md`}
    >
      {isGrid
        ? mockShirtData.map((shirt) => {
            return <ItemCard shirt={shirt} key={shirt.id} />;
          })
        : mockShirtData.map((shirt) => {
            return <ListItemCard shirt={shirt} key={shirt.id} />;
          })}
    </div>
  );
};

export default ViewSwitcher;
