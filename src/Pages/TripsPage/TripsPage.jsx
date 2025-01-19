import BreadcrumbsPage from "Components/Ui/BreadcrumbsPage/BreadcrumbsPage";
import React, { useState } from "react";
import TripsContent from "./Components/TripsContent/TripsContent";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import ModalSelectDestination from "Components/Ui/ModalSelectDestination/ModalSelectDestination";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";

const TripsPage = () => {
  // SHOW MODAL SELECT DESTINATION
  const [showModalSelectDestination, setShowModalSelectDestination] =
    useState(false);
  // SHOW MODAL ADD TRIP
  const buttonShowModal = () => {
    setShowModalSelectDestination(true);
  };
  const hideModalSelectDestination = () => {
    setShowModalSelectDestination(false);
  };

  return (
    <>
      <HelmetInfo titlePage={"الرحلات"} />

      <ModalSelectDestination
        showModalSelectDestination={showModalSelectDestination}
        hideModalSelectDestination={hideModalSelectDestination}
      />
      <div className="trips-page-info padding-60">
        <header>
          <BreadcrumbsPage
            newClassBreadHeader={"biography-bread breadcrumb-page-2"}
            routeTitleTwoBread={false}
            titleTwoBread={"المدينة المنورة"}
            textBreadActive={"رحلات"}
          />
        </header>
        <main>
          <ContainerMedia>
            <div className="mt-5">
              <TripsContent />
            </div>
          </ContainerMedia>
        </main>
      </div>
    </>
  );
};

export default TripsPage;
