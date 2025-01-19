import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReadMoreText from "Components/Ui/ReadMoreText/ReadMoreText";

const WhyBookingTrip = () => {
  const text = `ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
    من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
    الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`;

  const services = ["إسم الخدمة", "إسم الخدمة", "إسم الخدمة"];
  return (
    <div className="why-booking-trip pt-3 margin-top-1">
      <h2 className="title">لماذا تحجز الرحلة</h2>
      <ReadMoreText newClass="mt-4" text={text} maxLength={120} />
      <div className="list-content-info d-flex align-items-center  gap-5  flex-wrap mt-4">
        <ul className="list-one-info p-0 m-0 d-flex flex-column gap-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-title--1 d-flex align-items-center gap-2"
            >
              <span className="icon-check-link">
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {service}
            </li>
          ))}
        </ul>
        <ul className="list-one-info p-0 m-0 d-flex flex-column gap-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-title--1 d-flex align-items-center gap-2"
            >
              <span className="icon-check-link">
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {service}
            </li>
          ))}
        </ul>
        <ul className="list-one-info p-0 m-0 d-flex flex-column gap-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-title--1 d-flex align-items-center gap-2"
            >
              <span className="icon-check-link">
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyBookingTrip;
