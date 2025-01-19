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
import { useEffect, useState } from "react";
import HomeAPI from "api/homeApi";
const Home = () => {
  const [homeData, setHomeData] = useState(null); // State to store home data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await HomeAPI.getHomeData(); // Fetch data from the API
        setHomeData(data); // Set the fetched data to state
      } catch (err) {
        console.error("Error fetching home data:", err);
        setError("Failed to load home data. Please try again later.");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchHomeData(); // Call the API on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading spinner while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Display error message if fetching fails
  }
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
