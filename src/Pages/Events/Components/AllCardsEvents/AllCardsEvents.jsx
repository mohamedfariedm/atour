import React, { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import CardEvent from "../CardEvent/CardEvent";
import { cardsEvents } from "../../Data/DataEvents";

function AllCardsEvents() {
  const containerRef = useRef();
  const [mixer, setMixer] = useState(null); // State to hold the MixItUp instance
  const [activeFilter, setActiveFilter] = useState("*"); // BUTTON ACTIVE FILTER active

  useEffect(() => {
    // Initialize MixItUp
    const mixerInstance = mixitup(containerRef.current, {
      selectors: {
        target: ".item-card-mix" // Selector for items
      },
      animation: {
        effects: "fade",
        duration: 600
      }
    });

    setMixer(mixerInstance);
    return () => {
      mixerInstance.destroy();
    };
  }, []);

  const filterItems = (filter) => {
    if (mixer) {
      mixer.filter(filter); // Apply filter using MixItUp
      setActiveFilter(filter); // Update active filter
    }
  };

  // BUTTON BOOKING EVENTS FUNCTION
  const handleBookingButtonClick = (cardId) => {
    console.log(cardId);
  };

  return (
    <div className="all-cards-events h-100 padding-80">
      {/* =========== START BUTTONS FILTER =========== */}
      <div
        data-aos="fade-left"
        className="all-buttons-filters d-flex align-items-center gap-3"
      >
        <button
          onClick={() => filterItems("*")}
          className={`btn-filter-one main-btn-filter ${
            activeFilter === "*" ? "active" : ""
          }`}
        >
          الجميع
        </button>
        <button
          onClick={() => filterItems(".category1")}
          className={`btn-filter-one main-btn-filter ${
            activeFilter === ".category1" ? "active" : ""
          }`}
        >
          هذا الإسبوع
        </button>
        <button
          onClick={() => filterItems(".category2")}
          className={`btn-filter-one main-btn-filter ${
            activeFilter === ".category2" ? "active" : ""
          }`}
        >
          هذا الشهر
        </button>
        <button
          onClick={() => filterItems(".category3")}
          className={`btn-filter-one main-btn-filter ${
            activeFilter === ".category3" ? "active" : ""
          }`}
        >
          هذه السنة
        </button>
      </div>
      {/* =========== END BUTTONS FILTER =========== */}

      {/* ============ START ROW =========== */}
      <div data-aos="fade-up" ref={containerRef} className="row g-3">
        {cardsEvents.map((item) => (
          <div
            key={item.id}
            className={`col-12 col-sm-6  col-lg-12 item-card-mix ${item.category}`}
          >
            <CardEvent
              id={item.id}
              routeCardLink={`/eventsPage/${item.id}`}
              titleMonth={item.titlteMonth}
              numMonth={item.numMonth}
              titleDay={item.titleDay}
              image={item.image}
              nameCountry={item.nameCountry}
              titleCard={item.titleCard}
              numPrice={`${item.numPrice}$`}
              textContent={item.textContent}
              functionBookingButton={handleBookingButtonClick}
            />
          </div>
        ))}
      </div>
      {/* ============ END ROW =========== */}
    </div>
  );
}

export default AllCardsEvents;
