import HeartIconCollection from "assets/images/collection/HeartIconCollection";
import IconLocation from "assets/images/collection/IconLocation";
import "./CardEvent.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CardEvent = ({
  id,
  routeCardLink,
  titleMonth,
  numMonth,
  titleDay,
  image,
  nameCountry,
  titleCard,
  numPrice,
  textContent,
  functionBookingButton
}) => {
  const [isWishListed, setIsWishListed] = useState(false);
  const buttonWishlist = (e) => {
    e.preventDefault();
    setIsWishListed(!isWishListed);
    if (isWishListed !== true) {
      toast.success("تم الاضافة الى المفضلة");
    } else {
      toast.error("تم الحذف من المفضلة");
    }
  };

  return (
    <Link
      to={routeCardLink}
      className="card-event-one  card-collection-one card-favorite-one  d-flex align-items-center gap-3"
    >
      {/* ============== START RIGHT CARD EVENT =============== */}
      <div className="right-card-event">
        <span className="title-month">{titleMonth}</span>
        <div className="num-month">{numMonth}</div>
        <div className="title-day">{titleDay}</div>
      </div>
      {/* ============== END RIGHT CARD EVENT =============== */}

      {/* =========== START IMAGE CARD FAVORITE =========== */}
      <div className="image-collection h-100 overlay-bg">
        <img
          src={image}
          alt="imageCollection"
          loading="lazy"
          className="w-100 h-100 object-fit-cover"
        />
        <div
          onClick={buttonWishlist}
          className={`icon-heart  ${isWishListed ? "activeHeart" : ""}`}
        >
          <HeartIconCollection />
        </div>
        <div className="info-text">
          <IconLocation /> {nameCountry}
        </div>
      </div>
      {/* =========== END IMAGE COLLECTION =========== */}
      {/* =========== END IMAGE CARD FAVORITE =========== */}
      {/* =========== START INFO CONTENT CARD =========== */}
      <div className="content-info-card info-content-card">
        {/* ========== START HEADER TOP CARD ========== */}
        <div className="header-top-card d-flex justify-content-between align-items-center flex-wrap gap-3">
          <h2 className="title">{titleCard}</h2>
          <div className="price-info d-flex align-items-center gap-1">
            <span className="price-num">{numPrice}</span> / للفرد{" "}
          </div>
        </div>
        {/* ========== END HEADER TOP CARD ========== */}
        <div className="content-bottom-event d-flex align-items-center gap-3">
          <p className="text">{textContent}</p>
          <Link to={routeCardLink} className="booking-event-button btn-main">
            حجز
          </Link>
        </div>
      </div>
      {/* =========== END INFO CONTENT CARD =========== */}
    </Link>
  );
};

export default CardEvent;
