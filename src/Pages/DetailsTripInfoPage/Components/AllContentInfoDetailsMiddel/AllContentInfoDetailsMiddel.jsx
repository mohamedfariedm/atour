
import ContentInfoDetailsRight from "./ContentInfoDetailsRight/ContentInfoDetailsRight";
import ContentInfoDetailsLeft from "./ContentInfoDetailsLeft/ContentInfoDetailsLeft";

const AllContentInfoDetailsMiddel = () => {
  return (
    <div className="all-content-info-details-middel pt-5">
      {/* ============== START ROW =============== */}
      <div className="row gy-5 g-md-3">
        {/* =============== START COL ============= */}
        <div className="col-12 col-lg-8">
          <ContentInfoDetailsRight />
        </div>
        {/* =============== END COL ============= */}
        {/* =============== START COL ============= */}
        <div className="col-12 col-lg-4">
          <ContentInfoDetailsLeft />
        </div>
        {/* =============== END COL ============= */}
      </div>
      {/* ============== END ROW =============== */}
    </div>
  );
};

export default AllContentInfoDetailsMiddel;
