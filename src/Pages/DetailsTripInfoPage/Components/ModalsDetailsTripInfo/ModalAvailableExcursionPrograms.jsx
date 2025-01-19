import CustomModal from "Components/CustomModal/CustomModal";
import "./ModalsDetailsTripInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReadMoreText from "Components/Ui/ReadMoreText/ReadMoreText";
import { ClockIcon } from "@mui/x-date-pickers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderSvg from "assets/Icons/LoaderSvg";

const ModalAvailableExcursionPrograms = ({
  showModalAvailable,
  hideModalAvailable
}) => {
  const text =
    "ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.";

  const contentData = [
    {
      id: 1,
      title: "سفاري في الصحراء",
      date: [
        "7:30 م",
        "8:00 م",
        "9:00 ص",
        "7:30 م",
        "8:00 م",
        "9:00 ص",
        "7:30 م",
        "8:00 م",
        "9:00 ص"
      ],
      code: "2X340",
      price: 680
    },
    {
      id: 2,
      title: "سفاري في الصحراء",
      date: [
        "7:30 م",
        "8:00 م",
        "9:00 ص",
        "7:30 م",
        "8:00 م",
        "9:00 ص",
        "7:30 م",
        "8:00 م",
        "9:00 ص"
      ],
      code: "2X340",
      price: 680
    },
    {
      id: 3,
      title: "سفاري في الصحراء",
      date: [
        "7:30 م",
        "8:00 م",
        "9:00 ص",
        "7:30 م",
        "8:00 م",
        "9:00 ص",
        "7:30 م",
        "8:00 م",
        "9:00 ص"
      ],
      code: "2X340",
      price: 680
    }
  ];
  const [activeIndices, setActiveIndices] = useState(() =>
    contentData.map(() => null)
  );

  //  button CLICK CLOCK
  const handleClick = (cardIndex, buttonIndex) => {
    setActiveIndices((prevState) => {
      const newIndices = [...prevState];
      newIndices[cardIndex] = buttonIndex;
      return newIndices;
    });
  };

  const [activeCards, setActiveCards] = useState({});

  // BUTTON BOOK
  const buttonActiveBook = (id) => {
    setActiveCards((prevActive) => ({
      ...prevActive,
      [id]: !prevActive[id]
    }));
  };

  // ROUTE TO PAGE BOOKING
  const navigate = useNavigate();
  const navigateButton = () => {
    setTimeout(() => {
      navigate("/payConfirmPage");
    }, 1000);
  };

  return (
    <CustomModal
      show={showModalAvailable}
      onHide={hideModalAvailable}
      title={"البرامج المتاحة"}
      newClass={"modal-available modal-width-content"}
    >
      {/* ============== START ALL CONTENT AVAILABLE ================ */}
      <div className="all-content-available">
        {/* ============== START ROW ============ */}
        <div className="row g-3">
          {contentData.map((item) => {
            return (
              <>
                {/* ============= START COL ============= */}
                <div key={item.id} className="col-12">
                  {/* ============ START CARD CONTENT AVAILABLE =========== */}
                  <div
                    className={`card-content-available ${
                      activeCards[item.id] ? "active" : ""
                    }`}
                  >
                    {/* ========= START HEADER CARD AVAILABLE ============ */}
                    <div className="header-card-available d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <h2 className="title">{item.title}</h2>
                      <div
                        className={`icon-check-link ${
                          activeCards[item.id] ? "active" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                    </div>
                    {/* ========= END HEADER CARD AVAILABLE ============ */}
                    <div className="content-card-details py-2">
                      <ReadMoreText
                        text={text}
                        maxLength={100}
                        newClass={"text-card pt-3"}
                      />
                      <div className="times-trips change-scroll d-flex align-items-center gap-2 py-3 flex-wrap">
                        {item.date.map((time, buttonIndex) => (
                          <div
                            key={buttonIndex}
                            className={`main-btn-filter ${
                              activeIndices[item.id] === buttonIndex
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleClick(item.id, buttonIndex)}
                          >
                            <ClockIcon /> {time}
                          </div>
                        ))}
                      </div>

                      <div className="bottom-content-card">
                        <div className="row g-3 align-items-center">
                          <div className="col-12 col-sm-6">
                            <div className="content-right-card">
                              <p className="text">{item.code}</p>
                              <div className="total-price">
                                الإجمالي {item.price} ريال سعودي
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <button
                              onClick={() => {
                                buttonActiveBook(item.id);
                                navigateButton();
                              }}
                              className={`btn-main w-100 m-0 btn-height`}
                            >
                              {activeCards[item.id] ? <LoaderSvg /> : "حجز"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============ END CARD CONTENT AVAILABLE =========== */}
                </div>
                {/* ============= END COL ============= */}
              </>
            );
          })}
        </div>
        {/* ============== END ROW ============ */}
      </div>
      {/* ============== END ALL CONTENT AVAILABLE ================ */}
    </CustomModal>
  );
};

export default ModalAvailableExcursionPrograms;
