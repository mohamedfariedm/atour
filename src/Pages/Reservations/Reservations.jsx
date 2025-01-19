import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import SliderReservations from "./Components/SliderReservations";
import TabsReservations from "./Components/TabsReservations";
import "./Reservations.css";

const Reservations = () => {
  return (
    <>
      <HelmetInfo titlePage={"حجوزاتي"} />

      <div className="reservations-page">
        <header>
          {/* ============ START RESERVATIONS SLIDER =============== */}
          <SliderReservations />
          {/* ============ END RESERVATIONS SLIDER =============== */}
        </header>
        <main>
          <TabsReservations />
        </main>
      </div>
    </>
  );
};

export default Reservations;
