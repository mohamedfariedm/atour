import TitleSection from "Components/TitleSection/TitleSection";
import imageBannerHome from "../../../../assets/images/bannerHome/01.png";
import appStore from "../../../../assets/images/apps/appstore.svg";
import appGoogle from "../../../../assets/images/apps/googleplay.svg";
import "./BannerHome.css";
const BannerHome = () => {
  return (
    <div className="banner-home padding-top">
      {/* ========== START ALL BANNER HOME ========= */}
      <div className="all-banner-home">
        {/* =========== START ROW ========= */}
        <div className="row g-4 g-md-3 align-items-center">
          {/* ============ START COL ============ */}
          <div className="col-12 col-md-7">
            {/* ============ START INFO BANNER CONTENT =========== */}
            <div className="info-banner-content" data-aos="fade-left">
              <TitleSection
                title={"هل لديك خدمة يمكنك عرضها ؟"}
                text={
                  "ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                }
              />
              {/* ============= START APPS CONTENT INFO ============ */}
              <div className="apps-content-info">
                <h2 className="title-apps">حمل التطبيق وسجل الآن</h2>
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
            {/* ============ END INFO BANNER CONTENT =========== */}
          </div>
          {/* ============ END COL ============ */}
          {/* ============ START COL ============ */}
          <div className="col-12 col-md-5">
            {/* =========== START IMAGE BANNER ============= */}
            <div className="image-banner-home">
              <img
                data-aos="fade-right"
                src={imageBannerHome}
                alt="imageBannerHome"
                className="object-fit-cover"
                height={"482.04px"}
                width={"399.71px"}
              />
            </div>
            {/* =========== END IMAGE BANNER ============= */}
          </div>
          {/* ============ END COL ============ */}
        </div>
        {/* =========== END ROW ========= */}
      </div>
      {/* ========== END ALL BANNER HOME ========= */}
    </div>
  );
};

export default BannerHome;
