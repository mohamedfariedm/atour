import SliderEvents from "./Components/SliderEvents/SliderEvents";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import "./Events.css";
import AllCardsEvents from "./Components/AllCardsEvents/AllCardsEvents";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
const Events = () => {
  return (
    <>
      <HelmetInfo titlePage={"الفعاليات"} />

      <div className="events-page">
        <header>
          {/* =========== START SLIDER CONTENT ========== */}
          <SliderEvents />
          {/* =========== START SLIDER CONTENT ========== */}
        </header>
        <main>
          <ContainerMedia>
            <AllCardsEvents />
          </ContainerMedia>
        </main>
      </div>
    </>
  );
};

export default Events;
