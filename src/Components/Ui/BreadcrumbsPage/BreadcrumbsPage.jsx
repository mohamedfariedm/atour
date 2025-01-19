import ToggleBars from "assets/Icons/ToggleBars";
import { Link } from "react-router-dom";
import "./BreadcrumbsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
const BreadcrumbsPage = ({
  newClassBreadHeader,
  routeTitleTwoBread,
  titleTwoBread,
  textBreadActive
}) => {
  return (
    <div
      data-aos="fade-left"
      className={`breadcrumb-page position-relative  z-1 ${newClassBreadHeader}`}
    >
      <ContainerMedia>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb gap-1">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="link-bread d-flex align-items-center gap-2"
              >
                {" "}
                <ToggleBars />
                الصفحة الرئيسية{" "}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <div className="icon-chevron--1">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </li>

            <li className="breadcrumb-item">
              <Link
                to={routeTitleTwoBread}
                className="link-bread d-flex align-items-center gap-2"
              >
                {titleTwoBread}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <div className="icon-chevron--1">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </li>
            <li
              className="breadcrumb-item active d-flex align-items-center gap-2"
              aria-current="page"
            >
              {textBreadActive}
            </li>
          </ol>
        </nav>
      </ContainerMedia>
    </div>
  );
};

export default BreadcrumbsPage;
