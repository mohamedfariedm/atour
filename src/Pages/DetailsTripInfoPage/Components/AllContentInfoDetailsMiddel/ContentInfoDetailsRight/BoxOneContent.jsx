import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../../../assets/images/slider/01.png";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { ClockIcon } from "@mui/x-date-pickers";

import UserIcon2 from "assets/Icons/UserIcon2";
import { Avatar, AvatarGroup } from "@mui/material";
import image1 from "../../../../../assets/images/users/01.png";
import image2 from "../../../../../assets/images/users/02.png";
import image3 from "../../../../../assets/images/users/03.png";
import image4 from "../../../../../assets/images/users/04.png";
import ModalProviderInformation from "../../ModalsDetailsTripInfo/ModalProviderInformation/ModalProviderInformation";
import { useState } from "react";
const BoxOneContent = () => {
  // SHOW MODAL DETAILS
  const [showModalProviderInformation, setShowModalProviderInformation] =
    useState(false);
  const buttonShow = () => {
    setShowModalProviderInformation(true);
  };
  const buttonHide = () => {
    setShowModalProviderInformation(false);
  };

  return (
    <>
      <ModalProviderInformation
        showModalProviderInformation={showModalProviderInformation}
        hideModalProviderInformation={buttonHide}
      />
      <div className="box-info-one-content">
        {/* ============= START HEADER TOP CONTENT ============= */}
        <div
          onClick={buttonShow}
          className="header-top-content-box d-flex justify-content-between align-items-center gap-2 flex-wrap"
        >
          <div className="company-info d-flex align-items-center gap-2">
            <div className="img-company">
              <img src={img} alt="img" />
            </div>
            <div className="info-details-company">
              <h2 className="title">شركة atour للرحلات</h2>
              <div className="rate-info d-flex align-items-center gap-2 mt-1">
                <div className="icon-star rate-star-icon">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                4.5 تقييم
              </div>
            </div>
          </div>
          <div className="available-title d-flex align-items-center gap-2">
            <div className="icon-clock">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <span className="text p-0 m-0 text-decoration-underline">متاح</span>
          </div>
        </div>
        {/* ============= END HEADER TOP CONTENT ============= */}
        {/* ============= START BOX MIDDEL CONTENT =========== */}
        <div className="box-middel-content mt-3">
          <h2 className="title">نبذة تعريفية</h2>
          <p className="text">
            ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </p>
          <p className="text">
            تم حجز الرحلة <span className="fw-bold">+70</span> مرة
          </p>
          <div className="main-info-avatar mt-2 d-flex align-items-center gap-4 flex-wrap">
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
        </div>
        {/* ============= END BOX MIDDEL CONTENT =========== */}
        {/* ============= START END BOX CONTENT ============ */}
        <div className="end-box-content mt-3">
          <h2 className="title">برامج الرحلة</h2>
          <div className="content-box-one--1 d-flex justify-content-between align-items-center gap-2 flex-wrap">
            <div className="info-right--1 d-flex align-items-center gap-2">
              <ClockIcon />
              <p className="text">مدة الرحلة</p>
            </div>
            <p className="text">ساعة</p>
          </div>
          <div className="content-box-one--1 d-flex justify-content-between align-items-center gap-2 flex-wrap">
            <div className="info-right--1 d-flex align-items-center gap-2">
              <UserIcon2 />
              <p className="text">عدد المسافرين</p>
            </div>
            <p className="text"> 75فرد</p>
          </div>
        </div>
        {/* ============= END END BOX CONTENT ============ */}
      </div>
    </>
  );
};

export default BoxOneContent;
