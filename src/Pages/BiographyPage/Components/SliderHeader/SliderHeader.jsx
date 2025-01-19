import videoSrc from "../../../../assets/images/videos/01.mp4";

import "./SliderHeader.css";
const SliderHeader = () => {
  return (
    <>
      <div className="banner-main-area--1">
        <div className="banner-one section-padding bg-image">
          <div className="video-bg overlay-bg">
            <video
              autoPlay
              className="video-src"
              loop
              muted
              // @ts-ignore
              playsInline=""
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="info-banner position-relative z-1">
            <div className="row g-3 align-items-center justify-content-between">
              <div className="col-12">
                <div className="content-slide">
                  <h1 className="title" data-aos="fade-down">
                    مرحبا بكم في المدينة المنورة
                  </h1>
                  <p
                    className="text text-font-400-white font-18"
                    data-aos="fade-up"
                  >
                    ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.ذا النص هو مثال لنص يمكن أن
                    يستبدل في نفس المساحة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderHeader;
