import BellIcon from "assets/Icons/BellIcon";
import "./SettingsTab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import LanguageIcon from "assets/Icons/LanguageIcon";
import TrashIcon from "assets/Icons/TrashIcon";
import { useState } from "react";
import ModalRemove from "Components/Ui/ModalRemove/ModalRemove";
import { useLanguage } from "Components/Languages/LanguageContext";

const SettingsTab = () => {
  // SHOW MODAL
  const [showModalRemove, setShowModalRemove] = useState(false);
  const buttonShowModal = () => {
    // ADD SHOW MODAL TRUE
    setShowModalRemove(true);
  };
  const hideShowModal = () => {
    // HIDE SHOW MODAL
    setShowModalRemove(false);
  };

  // SWITCH CURRENT LANGUAGE
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  // ON CLIK LANG SET LANGUAGE I CLIKED
  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <ModalRemove
        showModalPayRemove={showModalRemove}
        hideModalPayRemove={hideShowModal}
        titleModal={"حذف حساب المستخدم"}
        title={"هل أنت متأكد من حذف الحساب ؟"}
        text={
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
        }
      />
      <div className="setting-tab">
        <h2 className="title title-info-top-account pb-3">الإعدادات</h2>

        {/* ============= START ALL SETTINGS TAB =============== */}
        <div className="all-settings-tab">
          {/* ============= START INFO ONE TOP ============== */}
          <div className="info-one-setting d-flex justify-content-between align-items-center gap-3 flex-wrap">
            {/* =========== START RIGHT INFO SETTINGS =========== */}
            <div className="right-info-settings d-flex align-items-center gap-3">
              {/* ========== START ICON SETTING ============ */}
              <div className="icon-setting">
                <BellIcon />
              </div>
              {/* ========== END ICON SETTING ============ */}
              {/* ========== START INFO CONTENT ========== */}
              <div className="info-content">
                <h2 className="title">الإشعارات</h2>
                <p className="text">إشعارات الهاتف خلال نافذة </p>
              </div>
              {/* ========== END INFO CONTENT ========== */}
            </div>
            {/* =========== END RIGHT INFO SETTINGS =========== */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault--1"
              />
              <label
                className="form-check-label d-none"
                htmlFor="flexSwitchCheckDefault--1"
              ></label>
            </div>
          </div>
          {/* ============= END INFO ONE TOP ============== */}
          {/* ============= START INFO ONE TOP ============== */}
          <div className="info-one-setting d-flex justify-content-between align-items-center gap-3 flex-wrap">
            {/* =========== START RIGHT INFO SETTINGS =========== */}
            <div
              onClick={handleLanguageChange}
              style={{ cursor: "pointer" }}
              className="right-info-settings d-flex align-items-center gap-3"
            >
              {/* ========== START ICON SETTING ============ */}
              <div className="icon-setting">
                <LanguageIcon />
              </div>
              {/* ========== END ICON SETTING ============ */}
              {/* ========== START INFO CONTENT ========== */}
              <div className="info-content">
                <h2 className="title">اللغه</h2>
                <p className="text">
                  {currentLanguage === "ar" ? "العربية" : "English"}
                </p>
              </div>
              {/* ========== END INFO CONTENT ========== */}
            </div>
            {/* =========== END RIGHT INFO SETTINGS =========== */}
            <div className="arrow-left">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
          {/* ============= END INFO ONE TOP ============== */}
          <div
            className="remove-account-user d-flex align-items-center gap-3 cursor-pointer-event"
            onClick={buttonShowModal}
          >
            <TrashIcon /> حذف الحساب
          </div>
        </div>
        {/* ============= END ALL SETTINGS TAB =============== */}
      </div>
    </>
  );
};

export default SettingsTab;
