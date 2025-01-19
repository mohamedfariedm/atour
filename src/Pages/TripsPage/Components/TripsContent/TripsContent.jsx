import React, { useState } from "react";
import CardsContentTrips from "./CardsContentTrips";
import FilterTripsContent from "./FilterTripsContent";
import "./TripsContent.css";

const TripsContent = () => {
  // SHOW MAP LOCTION
  const [activeMap, setActiveMap] = useState(false);
  const buttonActiveMap = () => {
    setActiveMap(!activeMap);
  };
  return (
    <div className="trips-content--info">
      <FilterTripsContent activeMap={activeMap} />
      <CardsContentTrips buttonActiveMap={buttonActiveMap} activeMap={activeMap} />
    </div>
  );
};

export default TripsContent;
