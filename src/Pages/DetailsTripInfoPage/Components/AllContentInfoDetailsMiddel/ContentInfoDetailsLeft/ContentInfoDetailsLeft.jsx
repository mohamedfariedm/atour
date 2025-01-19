import "./ContentInfoDetailsLeft.css";
import UserIcon2 from "assets/Icons/UserIcon2";
import DateIcon from "assets/Icons/DateIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalAvailableExcursionPrograms from "../../ModalsDetailsTripInfo/ModalAvailableExcursionPrograms";
import { useState } from "react";
import ModalNumberIndividuals from "../../ModalsDetailsTripInfo/ModalNumberIndividuals";
import DatePickerComponent from "Components/Ui/DatePickerComponent/DatePickerComponent";
const ContentInfoDetailsLeft = () => {
  // SHOW AVAILBLE MODAL TRIP
  const [showModalAvailable, setShowModalAvailable] = useState(false);
  const buttonShowModal = () => {
    setShowModalAvailable(true);
  };
  const hideModalAvailable = () => {
    setShowModalAvailable(false);
  };

  // MODAL NUMBER INDIVIDUALS
  const [showModalNumberIndividuals, setShowModalNumberIndividuals] =
    useState(false);
  const showModalNumberIndividualsButton = () => {
    setShowModalNumberIndividuals(true);
  };
  const hideModalNumberIndividuals = () => {
    setShowModalNumberIndividuals(false);
  };

  return (
    <>
      <ModalAvailableExcursionPrograms
        showModalAvailable={showModalAvailable}
        hideModalAvailable={hideModalAvailable}
      />
      <ModalNumberIndividuals
        showModalNumberIndividuals={showModalNumberIndividuals}
        hideModalNumberIndividuals={hideModalNumberIndividuals}
      />

      <div className="content-info-details-left-trip" data-aos="fade-right">
        <h2 className="title">حدد التاريخ المناسب لك</h2>
        {/** =============== START ALL CONTENT LEFT ============= */}
        <div className="all-box-content-left">
          <div className="main-add-place-date main-add-place-date--1">
            {/* ======== START SEARCH INPUT ========= */}
            <DatePickerComponent addTextPlaceHolder={"حدد تاريخ الرحلة "} />
            {/* ======== END SEARCH INPUT ========= */}
          </div>
          {/* =========== START BOX ONE CONTENT ============= */}
          <div
            onClick={showModalNumberIndividualsButton}
            className="box-one-content cursor-pointer-event mb-3 d-flex justify-content-between align-items-center gap-2 flex-wrap"
          >
            <div className="info-box-right">
              <h2 className="title">عدد الأفراد</h2>
              <p className="text">1 بالغ , 3 أطفال</p>
            </div>
            <div className="icon-box">
              <UserIcon2 />
            </div>
          </div>
          {/* =========== END BOX ONE CONTENT ============= */}
          <button className="btn-main w-100" onClick={buttonShowModal}>
            إظهر البرامج المتاحة
          </button>
          <div className="end-info-detials">
            <div className="detials-info-one d-flex align-items-center gap-2">
              <div className="icon-check icon-check-link">
                <FontAwesomeIcon icon={faCheck} />{" "}
              </div>
              <span className=" text-decoration-underline title-text cursor-pointer-event">
                {" "}
                متاح إلغاء الحجز مجانا
              </span>
            </div>
            <div className="detials-info-one d-flex align-items-center gap-2">
              <div className="icon-times icon-check-link">
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <span className="title-text">إحجز الآن إدفع لاحقا</span>
            </div>
          </div>
        </div>
        {/** =============== END ALL CONTENT LEFT ============= */}
      </div>
    </>
  );
};

export default ContentInfoDetailsLeft;
