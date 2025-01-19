import React from "react";
import SliderOffers from "./Components/SliderOffers/SliderOffers";
import OffersContent from "./Components/OffersContent/OffersContent";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import "./Offers.css"
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
const Offers = () => {
  return (
    <>
    <HelmetInfo titlePage={"العروض"} />

      <div className="offers-page">
        <header>
          <SliderOffers />
        </header>
        <main>
          {/* ============== START CONTAINER ============== */}
          <ContainerMedia>
            <OffersContent />
          </ContainerMedia>
          {/* ============== END CONTAINER ============== */}
        </main>
      </div>
    </>
  );
};

export default Offers;
