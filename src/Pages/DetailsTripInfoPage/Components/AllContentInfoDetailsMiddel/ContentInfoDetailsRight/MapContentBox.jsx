import MapLocationInfo from "Components/Ui/MapLocationInfo/MapLocationInfo";


const MapContentBox = () => {
  return (
    <div className="map-content-box--info margin-top-1">
      {/* ============= START ROW ============ */}
      <div className="row g-3 align-items-center">
        {/* ========= START COL ========= */}
        <div className="col-12 col-md-7">
          {/* ========== START CONTENT INFO MAP  ============ */}
          <div className="content-info-map">
            <h2 className="title">من أين ستبدأ رحلتك</h2>
            <div className="box-border-circle">
              <h2 className="title-text">نقطة الإلتقاء</h2>
              <p className="text">
                ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى
              </p>
            </div>
            <div className="box-border-circle">
            <h2 className="title-text">نقطة الإلتقاء</h2>
            <p className="text">
              ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى
            </p>
          </div>
          </div>
          {/* ========== END CONTENT INFO MAP  ============ */}
        </div>
        {/* ========= END COL ========= */}
        {/* ========= START COL ========= */}
        <div className="col-12 col-md-5">
        <div className="map-box">
              <MapLocationInfo />
        </div>
        </div>
        {/* ========= END COL ========= */}
      </div>
      {/* ============= END ROW ============ */}
    </div>
  );
};

export default MapContentBox;
