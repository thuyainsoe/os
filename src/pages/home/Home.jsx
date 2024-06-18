import FullCarousel from "@/components/full-carousel/FullCarousel";
import FullPopularItems from "@/components/full-popular-items/FullPopularItems";
import GridSwitchBar from "@/components/grid-switch-bar/GridSwitchBar";
import ViewSwitcher from "@/components/view-switcher/ViewSwitcher";
import { useState } from "react";

const Home = () => {
  const [isGrid, setIsGrid] = useState(true);

  const setGridType = (type) => {
    if (type === "grid") {
      setIsGrid(true);
      return;
    }
    setIsGrid(false);
  };

  return (
    <>
      <FullCarousel />
      <FullPopularItems />
      <GridSwitchBar setGridType={setGridType} isGrid={isGrid} />
      <ViewSwitcher isGrid={isGrid} />
    </>
  );
};

export default Home;
