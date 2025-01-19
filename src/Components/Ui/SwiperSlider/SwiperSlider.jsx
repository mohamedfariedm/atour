import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./SwiperSlider.css"
const SwiperSlider = ({sliderNewClass,itemsSlider,children}) => {
  return (
    <>
      <div className={`banner-main-area ${sliderNewClass}`}>
        <Swiper
          spaceBetween={15}
          effect={"fade"}
          navigation={false}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, EffectFade, Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          {itemsSlider.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                {/* ========= START BANNER ONE ======== */}
                <div
                  className="banner-one section-padding bg-image"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
                {/* ======== END BANNER ONE ========= */}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {children}
      </div>
    </>
  );
};

export default SwiperSlider;
