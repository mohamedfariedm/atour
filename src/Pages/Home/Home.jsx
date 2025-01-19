import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import HeaderCard from "./Components/HeaderCard/HeaderCard";
import ImagesCard from "./Components/ImagesCard/ImagesCard";
import CardsBooks from "./Components/WhyCardsBooks/CardsBooks";
import CardsCollections from "./Components/CardsCollections/CardsCollections";
import ExploreCountries from "./Components/ExploreCountries/ExploreCountries";
import CustomersReviews from "./Components/CustomersReviews/CustomersReviews";
import BannerHome from "./Components/BannerHome/BannerHome";
import Slider from "./Components/Slider/Slider";

import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
const Home = () => {
  return (
    <>
      <HelmetInfo titlePage={"الصفحة الرئيسية"} />
      <header>
        <Slider />
      </header>
      <main>
        <ContainerMedia>
          <HeaderCard />
          <ImagesCard />
          <CardsBooks />
          <CardsCollections />
          <ExploreCountries />
          <CustomersReviews />
          <BannerHome />
        </ContainerMedia>
      </main>
    </>
  );
};

export default Home;
