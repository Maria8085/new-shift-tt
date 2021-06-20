// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { SwiperSlide } from "swiper/react";
import { Image, StyledSwiper } from "./styled";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

SwiperCore.use([Navigation, Pagination]);

const CardSlider = ({ images }) => {
  return (
    <StyledSwiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images &&
        images.map((v) => (
          <SwiperSlide>
            <Image src={v} alt="Изображения помещения" />
          </SwiperSlide>
        ))}
    </StyledSwiper>
  );
};

export default CardSlider;
