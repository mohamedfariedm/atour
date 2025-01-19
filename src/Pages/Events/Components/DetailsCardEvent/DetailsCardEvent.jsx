import React from "react";
import SliderEventCardDetails from "./Components/SliderEventCardDetails/SliderEventCardDetails";
import DetailsCardPage from "./Components/DetailsCardPage/DetailsCardPage";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";

const DetailsCardEvent = () => {
  return (
    <>
      <HelmetInfo titlePage={"تفاصيل الفعاليات"} />

      <div className="details-card-event-page">
        {/* =========== START DETAILS CARD EVENT DETAILS ============= */}
        <SliderEventCardDetails />
        {/* =========== END DETAILS CARD EVENT DETAILS ============= */}
        {/* =========== START CONTAINER ============ */}
        <ContainerMedia>
          <DetailsCardPage />
        </ContainerMedia>
        {/* =========== END CONTAINER ============ */}
      </div>
    </>
  );
};

export default DetailsCardEvent;
