import React from "react";
import "./NotFound.css";
import Lottie from "lottie-react";
import notFoundPage from "./404.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="not-found-page d-flex align-items-center  justify-content-center padding-top flex-column">
      <div className="animtion-lottie">
        <Lottie animationData={notFoundPage} />
      </div>
      <div className="content-info-error">
        <h2 className="title">الصفحة غير موجودة!</h2>
      </div>
      <Link to={"/"} className="btn-main">
        <FontAwesomeIcon icon={faHome} />
        الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
