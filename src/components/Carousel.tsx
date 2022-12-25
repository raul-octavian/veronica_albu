import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ImageOne from "../assets/all-white.jpg";
import ImageTwo from "../assets/main_diamond_cropped.jpg";
import ImageThree from "../assets/red_shine.jpg";
import ImageFour from "../assets/white_and_shine.jpg";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        scrollbar={{ draggable: true }}
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={30}
        className="mySwiper w-[80%] relative h-[400px] md:h-[600px] bg-secondary-main"
      >
        <SwiperSlide className="flex justify-center align-middle w-fit">
          <img src={ImageOne} alt="" className="h-full w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center align-middle w-fit">
          <img src={ImageTwo} alt="" className="h-full w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center align-middle w-fit">
          <img
            src={ImageThree}
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center align-middle w-fit">
          <img
            src={ImageFour}
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
