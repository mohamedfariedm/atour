import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartIcon } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopContentInfo.css";
import { useState } from "react";
import { toast } from "react-toastify";
const TopContentInfo = () => {
  const [isActiveHeart, setIsActiveHeart] = useState(false);
  const activeHeartButton = () => {
    setIsActiveHeart(!isActiveHeart);
    if (!isActiveHeart) {
      toast.success("تم الاضافة الى المفضلة بنجاح");
    } else {
      toast.success("تم الحذف من المفضلة بنجاح");
    }
  };

  return (
    <div data-aos="fade-left" className="top-content-info-details d-flex justify-content-between gap-2 flex-wrap">
      <div className="right-info-details">
        <h2 className="title">سفاري في الصحراء في الرياض</h2>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <div className="rate-stars-details d-flex align-items-center gap-1">
            <span className="icon-star-details rate-star-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="icon-star-details rate-star-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="icon-star-details rate-star-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="icon-star-details rate-star-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="icon-star-details rate-star-icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          <div className="rate-num d-flex align-items-center gap-2">
            <span className="fw-blod">4.5 </span> تقييم
          </div>
          <div className="badge-top">Top rated</div>
        </div>
      </div>
      <div
        onClick={activeHeartButton}
        className={`icon-heart-details ${isActiveHeart ? "active" : ""}`}
      >
        {!isActiveHeart ? (
          <FontAwesomeIcon icon={heartIcon} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
      </div>
    </div>
  );
};

export default TopContentInfo;
