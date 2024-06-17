import FullCarousel from "@/components/full-carousel/FullCarousel";
import FullPopularItems from "@/components/full-popular-items/FullPopularItems";
import GridSwitchBar from "@/components/grid-switch-bar/GridSwitchBar";

const Home = () => {
  return (
    <>
      <FullCarousel />
      <FullPopularItems />
      <GridSwitchBar />
    </>
  );
};

export default Home;
