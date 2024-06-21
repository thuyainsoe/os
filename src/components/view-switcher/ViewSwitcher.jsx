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
    name: "Shirt1",
    price: "12000",
    category: "vintage-shirt",
  },
  {
    id: "2",
    image: shirtMock1,
    name: "Shirt2",
    price: "12000",
    category: "vintage-shirt",
  },
  {
    id: "3",
    image: shirtMock2,
    name: "Shirt3",
    price: "12000",
    category: "vintage-shirt",
  },
  {
    id: "4",
    image: shirtMock3,
    name: "Shirt4",
    price: "12000",
    category: "antique-jewelry",
  },
  {
    id: "5",
    image: shirtMock4,
    name: "Shirt5",
    price: "12000",
    category: "old-world-watches",
  },
  {
    id: "6",
    image: shirtMock5,
    name: "Shirt6",
    price: "12000",
    category: "antique-jewelry",
  },
  {
    id: "7",
    image: shirtMock3,
    name: "Shirt7",
    price: "12000",
    category: "old-world-watches",
  },
  {
    id: "8",
    image: shirtMock4,
    name: "Shirt8",
    price: "12000",
    category: "timeless-hats",
  },
  {
    id: "9",
    image: shirtMock5,
    name: "Shirt9",
    price: "12000",
    category: "timeless-hats",
  },
  {
    id: "10",
    image: shirtMock1,
    name: "Shirt10",
    price: "12000",
    category: "nostalgic-vinyl",
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
