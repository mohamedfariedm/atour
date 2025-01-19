import SwiperSlider from "Components/Ui/SwiperSlider/SwiperSlider";
import imageBanner1 from "../../../../../assets/images/slider/01.png";
import imageBanner2 from "../../../../../assets/images/slider/02.png";
import imageBanner3 from "../../../../../assets/images/slider/03.png";
const SliderDetailsContentRight = () => {
  const itemsSlider = [
    { id: 1, imageUrl: imageBanner1 },
    { id: 2, imageUrl: imageBanner2 },
    { id: 3, imageUrl: imageBanner3 }
  ];

  return (
    <SwiperSlider itemsSlider={itemsSlider} sliderNewClass={"slider-height slider-details-right margin-top-1"}>
      <div className=""></div>
    </SwiperSlider>
  );
};

export default SliderDetailsContentRight;
