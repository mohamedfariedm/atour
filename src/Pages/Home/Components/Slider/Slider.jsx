import imageBanner1 from "../../../../assets/images/slider/01.png";
import imageBanner2 from "../../../../assets/images/slider/02.png";
import imageBanner3 from "../../../../assets/images/slider/03.png";
import image1 from "../../../../assets/images/users/01.png";
import image2 from "../../../../assets/images/users/02.png";
import image3 from "../../../../assets/images/users/03.png";
import image4 from "../../../../assets/images/users/04.png";
import { Avatar, AvatarGroup } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import SwiperSlider from "Components/Ui/SwiperSlider/SwiperSlider";
import SearchInputLocation from "Components/Ui/SearchInputLocation/SearchInputLocation";
import DatePickerComponent from "Components/Ui/DatePickerComponent/DatePickerComponent";

const Slider = () => {
  // IMAGES SLIDER

  const itemsSlider = [
    { id: 1, imageUrl: imageBanner1 },
    { id: 2, imageUrl: imageBanner2 },
    { id: 3, imageUrl: imageBanner3 }
  ];

  return (
    <>
      <SwiperSlider itemsSlider={itemsSlider} sliderNewClass={"slider-home"}>
        {/* ========== START CONTENT SLIDER INFO ============ */}
        <div className="content-slider-info">
          {/* ========== START CONTAINER ========== */}
          <>
            {/* ========== START ALL MAIN CONTENT SLIDER =========== */}
            <div className="all-main-content-slider" data-aos="fade-up">
              <h2 className="title-silde">مغامرات لا تنسى تنتظرك</h2>
              <p className="text">
                ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>

              <div className="main-info-avatar d-flex align-items-center gap-4 flex-wrap">
                <AvatarGroup
                  renderSurplus={(surplus) => (
                    <span>{surplus.toString()[0]}K+</span>
                  )}
                  total={8000}
                  className="all-avatar"
                >
                  <Avatar alt="Remy Sharp" src={image1} className="avatar-1" />
                  <Avatar alt="Remy Sharp" src={image2} className="avatar-1" />
                  <Avatar alt="Remy Sharp" src={image3} className="avatar-1" />
                  <Avatar alt="Remy Sharp" src={image4} className="avatar-1" />
                </AvatarGroup>
                <h2 className="text-title">أكثر من 700.00 شخص يثق بجولة</h2>
              </div>

              {/* ======== START MAIN ADD PLACE DATE ========= */}
              <div className="main-add-place-date main-add-place-date--1">
                <SearchInputLocation />
                {/* ======== START SEARCH INPUT ========= */}
                <DatePickerComponent addTextPlaceHolder={"حدد تاريخ الرحلة"} />
                {/* ======== END SEARCH INPUT ========= */}
                <button className="btn-main btn-search-submit" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              {/* ======== END MAIN ADD PLACE DATE ========= */}
            </div>
            {/* ========== END ALL MAIN CONTENT SLIDER =========== */}
          </>
          {/* ========== END CONTAINER ========== */}
        </div>
        {/* ========== END CONTENT SLIDER INFO ============ */}
      </SwiperSlider>
    </>
  );
};

export default Slider;
