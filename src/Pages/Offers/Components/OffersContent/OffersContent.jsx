import React from "react";
import FilterOffersCard from "./FilterOffersCard";
import OffersCards from "./OffersCards";

const OffersContent = () => {
  return (
    <div className="all-offers-content padding-80">
      {/* ============= START ROW ============ */}
      <div className="row g-3">
        {/* ============ START COL ============= */}
        <div className="col-12 col-md-12 col-lg-4">
          <FilterOffersCard />
        </div>
        {/* ============ END COL ============= */}
        {/* ============ START COL ============= */}
        <div className="col-12 col-md-12 col-lg-8">
          <OffersCards />
        </div>
        {/* ============ END COL ============= */}
      </div>
      {/* ============= END ROW ============ */}
    </div>
  );
};

export default OffersContent;
