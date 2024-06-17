import style from "./fullcarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import carousel1 from "@/assets/images/mock-images/carousel1.png";
import carousel2 from "@/assets/images/mock-images/carousel2.png";
import carousel3 from "@/assets/images/mock-images/carousel3.png";

const images = [
  {
    id: "1",
    image: carousel1,
  },
  {
    id: "2",
    image: carousel2,
  },
  {
    id: "3",
    image: carousel3,
  },
];

const FullCarousel = () => {
  return (
    <div className={`full-carousel ${style.container}`} id="swiper-reset">
      <Swiper
        className="h-full"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images.map((slide) => {
          return (
            <SwiperSlide className="h-full w-full" key={slide.id}>
              <img
                className="w-full h-full object-cover object-top"
                src={slide.image}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FullCarousel;
