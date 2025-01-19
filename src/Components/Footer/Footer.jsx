import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import logoFooter from "../../assets/images/logo/logoFooter.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faSnapchat,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import appStore from "../../assets/images/apps/appStorFooter.svg";
import appGoogle from "../../assets/images/apps/googlePlayFooter.svg";
import PhoneIcon from "assets/images/footerIcons/PhoneIcon";
import EmailIcon from "assets/images/footerIcons/EmailIcon";

const Footer = () => {
  return (
    <div className="footer">
      {/* =============== START CONTAINER ============== */}
      <ContainerMedia>
        {/* ================= START ALL FOOTER ============== */}
        <div className="all-footer" data-aos="fade-up">
          {/* =============== START ROW ============ */}
          <div className="row  g-4">
            {/* ============= START COL ============= */}
            <div className="col-12 col-sm-6 col-md-5">
              {/* ============ START FOOTER ONE ============ */}
              <div className="footer-one">
                <Link to={"/"}>
                  <img
                    src={logoFooter}
                    alt="logo footer"
                    width={"155px"}
                    height={"71.37px"}
                  />
                </Link>
                <div className="socials-icons">
                  <ul className="list-socials d-flex flex-wrap align-items-center gap-3 p-0 m-0">
                    <li>
                      <a
                        href="https://www.linkedin.com/login"
                        target="_blank"
                        rel="noreferrer"
                        className="link-social-one"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="link-social-one"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="link-social-one"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="link-social-one"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.snapchat.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="link-social-one"
                      >
                        <FontAwesomeIcon icon={faSnapchat} />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* ============= START APPS CONTENT INFO ============ */}
                <div className="apps-content-info">
                  <h2 className="title-apps">حمل التطبيق</h2>
                  {/* ============== START APPS LINKS ============= */}
                  <div className="apps-links d-flex align-items-center  gap-3 mt-3">
                    <a
                      href="https://www.apple.com/eg-ar/app-store/"
                      target="_blank"
                      className="link-app-one"
                      rel="noreferrer"
                    >
                      <img src={appStore} alt="app store" />
                    </a>
                    <a
                      href="https://www.apple.com/eg-ar/app-store/"
                      target="_blank"
                      className="link-app-one"
                      rel="noreferrer"
                    >
                      <img src={appGoogle} alt="app google" />
                    </a>
                  </div>
                  {/* ============== END APPS LINKS ============= */}
                </div>
                {/* ============= END APPS CONTENT INFO ============ */}
              </div>
              {/* ============ END FOOTER ONE ============ */}
            </div>
            {/* ============= END COL ============= */}
            {/* ============= START COL ============ */}
            <div className="col-12 col-sm-6 col-md-3">
              {/* =========== START FOOTER TWO ========== */}
              <div className="footer-two-links">
                <h2 className="title-footer">روابط تهمك</h2>
                <ul className="nav flex-column p-0 m-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="offers" className="nav-link">
                      عروض 🔥
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="eventsPage" className="nav-link">
                      الفعاليات
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="blogsPage" className="nav-link">
                      المدونة
                    </Link>
                  </li>
                </ul>
              </div>
              {/* =========== END FOOTER TWO ========== */}
            </div>
            {/* ============= END COL ============ */}
            {/* ============= START COL ============ */}
            <div className="col-12 col-sm-6 col-md-4">
              {/* =========== START FOOTER TWO ========== */}
              <div className="footer-two-links footer-right-contact">
                <h2 className="title-footer">تواصل معنا</h2>
                {/* =========== START INFO FOOTER CONTENT ========== */}
                <div className="info-footer-content">
                  {/* ========= START INFO CONTACT ONE ========= */}
                  <a
                    href="tel:+1234567890"
                    className="info-contact-one d-flex gap-3"
                  >
                    {/* ======= START ICON FOOT CONTACT ========== */}
                    <div className="icon-foot-contact">
                      <PhoneIcon />
                    </div>
                    {/* ======= END ICON FOOT CONTACT ========== */}
                    {/* ======= START CONTACT INFO ========== */}
                    <div className="contact-info">
                      <h2 className="title-foot">إتصل بنا</h2>
                      <p className="link-contact">09 66 5489 634 48+</p>
                    </div>
                    {/* ======= END CONTACT INFO ========== */}
                  </a>
                  {/* ========= END INFO CONTACT ONE ========= */}
                  {/* ========= START INFO CONTACT ONE ========= */}
                  <a
                    href="mailto:atour@gmail.com"
                    className="info-contact-one d-flex gap-3"
                  >
                    {/* ======= START ICON FOOT CONTACT ========== */}
                    <div className="icon-foot-contact">
                      <EmailIcon />
                    </div>
                    {/* ======= END ICON FOOT CONTACT ========== */}
                    {/* ======= START CONTACT INFO ========== */}
                    <div className="contact-info">
                      <h2 className="title-foot">البريد الإلكتروني</h2>
                      <p className="link-contact">atour@gmail.com</p>
                    </div>
                    {/* ======= END CONTACT INFO ========== */}
                  </a>
                  {/* ========= END INFO CONTACT ONE ========= */}
                  {/* ========= START INFO CONTACT ONE ========= */}
                  <a href="##" className="info-contact-one d-flex gap-3">
                    {/* ======= START ICON FOOT CONTACT ========== */}
                    <div className="icon-foot-contact">
                      <EmailIcon />
                    </div>
                    {/* ======= END ICON FOOT CONTACT ========== */}
                    {/* ======= START CONTACT INFO ========== */}
                    <div className="contact-info">
                      <h2 className="title-foot">الموقع</h2>
                      <p className="link-contact">
                        الرياض , طريق المذنب , السعودية
                      </p>
                    </div>
                    {/* ======= END CONTACT INFO ========== */}
                  </a>
                  {/* ========= END INFO CONTACT ONE ========= */}
                </div>
                {/* =========== END INFO FOOTER CONTENT ========== */}
              </div>
              {/* =========== END FOOTER TWO ========== */}
            </div>
            {/* ============= END COL ============ */}
          </div>
          {/* =============== END ROW ============ */}
        </div>
        {/* ================= END ALL FOOTER ============== */}
        {/* ================= START FINAL FOOTER ========== */}
        <div className="final-footer">
          <p className="title-final">
            جميع الحقوق محفوظة ©
            <Link to="/" className="link-web">
              a-tour
            </Link>{" "}
            2024
          </p>
        </div>
        {/* ================= END FINAL FOOTER ========== */}
      </ContainerMedia>
      {/* =============== END CONTAINER ============== */}
    </div>
  );
};

export default Footer;
