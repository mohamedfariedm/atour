import BoxOneContent from "./BoxOneContent";
import CardsTripsDetails from "./CardsTripsDetails/CardsTripsDetails";
import "./ContentInfoRight.css";
import MapContentBox from "./MapContentBox";
import PicturesPreviousTrips from "./PicturesPreviousTrips";
import RatesComments from "./RatesComments/RatesComments";
import SliderDetailsContentRight from "./SliderDetailsContentRight";
import TextContent from "./TextContent";
import WhyBookingTrip from "./WhyBookingTrip";
const ContentInfoDetailsRight = () => {
  return (
    <div className="all-content-info-details-right" data-aos="fade-left">
      <BoxOneContent />
      <SliderDetailsContentRight />
      <WhyBookingTrip />
      <MapContentBox />
      <TextContent />
      <RatesComments />
      <PicturesPreviousTrips />
      <CardsTripsDetails />
    </div>
  );
};

export default ContentInfoDetailsRight;
