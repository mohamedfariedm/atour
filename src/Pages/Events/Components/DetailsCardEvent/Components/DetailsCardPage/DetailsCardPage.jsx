import ClockIcon2 from "assets/Icons/ClockIcon2";
import DateIcon2 from "assets/Icons/DateIcon2";
import "./DetailsCardPage.css";
import ModalBookingPayment from "./ModalBookings/ModalBookingPayment";
import { useState } from "react";
import MapLocationInfo from "Components/Ui/MapLocationInfo/MapLocationInfo";
const DetailsCardPage = () => {
  const [showModalPay, setShowModalPay] = useState(false);
  const showButtonBooking = () => {
    setShowModalPay(true);
  };
  const hideModalPay = () => {
    setShowModalPay(false);
  };

  return (
    <>
      <ModalBookingPayment
        showModalBookingPay={showModalPay}
        hideModalBookingPay={hideModalPay}
      />
      <div className="details-card-page padding-80">
        {/* ============= START HEADER DETAILS CARD PAGE =========== */}
        <div className="header-details-card-page d-flex  justify-content-between  align-items-center  flex-wrap  gap-3">
          <h2 className="title">يوم التأسيس السعودي</h2>
          {/* =============== START INFO RIGHT DETAILS ============== */}
          <div className="info-right-details d-flex  align-items-center   gap-3">
            <div className="num-price-info">
              {" "}
              <span className="price-num fw-bold ">53$</span> /للفرد
            </div>
            <button onClick={showButtonBooking} className="btn-main">
              حجز
            </button>
          </div>
          {/* =============== END INFO RIGHT DETAILS ============== */}
        </div>
        {/* ============= END HEADER DETAILS CARD PAGE =========== */}
        {/* ============= START DATE CONTENT INFO =============== */}
        <div className="date-content-info pt-3">
          {/* ========= START DATE  ONE ========== */}
          <div className="date-one d-flex  align-items-center gap-2">
            <DateIcon2 />
            <div className="text-date">
              {" "}
              الثلاثاء <span className="fw-bold">24</span> مايو,
              <span className="fw-bold">2024</span>
            </div>
          </div>
          {/* ========= END DATE  ONE ========== */}
          {/* ========= START DATE  ONE ========== */}
          <div className="date-one pt-2 d-flex  align-items-center  gap-2">
            <ClockIcon2 />
            8:30 م
          </div>
          {/* ========= END DATE  ONE ========== */}
        </div>
        {/* ============= END DATE CONTENT INFO =============== */}
        <p className="text pt-3">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم
          أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص
          العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع
          الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه
          على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو
          حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
        </p>
        {/* ============== START LOCATION CONTENT =============== */}
        <div className="location-content-info pt-4">
          <h2 className="title pb-4">الموقع</h2>
          <div className="info-location box-border-circle">
            <h2 className="title-text">وسط البلد</h2>

            <p className="text">
              ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى
            </p>
          </div>

          <MapLocationInfo />
        </div>
        {/* ============== END LOCATION CONTENT =============== */}
      </div>
    </>
  );
};

export default DetailsCardPage;
