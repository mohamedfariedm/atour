import "./AllCardsReservation.css";
import CardReservation from "./CardReservation";
import { dataReservation } from "../Data/DataReservation";
import { Link } from "react-router-dom";
import ModalDetailsTrip from "../ModalsReservation/ModalDetailsTrip";
import { useState } from "react";
const AllCardsReservations = () => {
  // SHOW MODAL DETAILS TRIP
  const [showDetailsTrip, setDetailsTrip] = useState(false);
  const buttonShowDetails = () => {
    setDetailsTrip(true);
  };
  const hideDetailsModal = () => {
    setDetailsTrip(false);
  };

  return (
    <>
      <ModalDetailsTrip
        showDetailsModal={showDetailsTrip}
        hideDetailsModal={hideDetailsModal}
      />
      <div className="all-cards-reservations">
        {/* =============== START ROW ============== */}
        <div className="row g-3">
          {dataReservation.length > 0 ? (
            dataReservation.map((item) => {
              return (
                <>
                  {/* ============== START COL ============= */}
                  <div key={item.id} className="col-12  col-md-6 col-lg-12">
                    <CardReservation
                      image={item.image}
                      typeReservation={item.typeReservation}
                      countryName={item.countryName}
                      titleCard={item.titleCard}
                      priceNum={`${item.priceNum}$`}
                      textUserInfo={item.textUserInfo}
                      dateTime={item.dateTime}
                      timeAdd={item.timeAdd}
                      isTrueButtonDetails={true}
                      buttonDetailsFunction={buttonShowDetails}
                      isTrueButtonCancel={false}
                      buttonCancelReservationFunction={false}
                    />
                  </div>
                  {/* ============== END COL ============= */}
                </>
              );
            })
          ) : (
            <>
              <p className="text-section-api fs-6 fw-medium text-center pt-5">
                لا يوجد بيانات متاحة.{" "}
                <Link
                  to="/"
                  className="fs-6 fw-medium text-danger text-decoration-underline"
                >
                  الصفحة الرئيسية
                </Link>
              </p>
            </>
          )}
        </div>
        {/* =============== END ROW ============== */}
      </div>
    </>
  );
};

export default AllCardsReservations;
