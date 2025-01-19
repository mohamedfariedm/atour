import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import TabsContent from "Components/Ui/TabsContent/TabsContent";
import Fork from "assets/images/IconsHeader/Fork";
import Hotel from "assets/images/IconsHeader/Hotel";
import Tree from "assets/images/IconsHeader/Tree";
import SliderHeader from "../SliderHeader/SliderHeader";
import FamousLandmarksCards from "../FamousLandmarksCards/FamousLandmarksCards";
import CardsCollectionBio from "../CardsCollectionBio/CardsCollectionBio";
import ExploreBiographyCards from "../ExploreBiography/ExploreBiographyCards";
import NewRates from "../NewRates/NewRates";
import IconBio from "assets/images/IconsBooks/IconBio";
import TripsContent from "Pages/TripsPage/Components/TripsContent/TripsContent";

const TabsBiography = () => {
  const tabsDataBio = [
    {
      eventKey: "tab1",
      title: (
        <>
          <IconBio /> نبذة تعريفية
        </>
      ),
      content: (
        <>
          <SliderHeader />
          <ContainerMedia>
            <FamousLandmarksCards />
            <CardsCollectionBio />
            <ExploreBiographyCards />
            <NewRates />
          </ContainerMedia>
        </>
      )
    },
    {
      eventKey: "tab2",
      title: (
        <>
          <Tree /> رحلات
        </>
      ),
      content: (
        <>
          <ContainerMedia>
            <TripsContent />
          </ContainerMedia>
        </>
      )
    },
    {
      eventKey: "tab3",
      title: (
        <>
          <Hotel /> فنادق
        </>
      ),
      content: (
        <>
        <ContainerMedia>
            <TripsContent />
          </ContainerMedia>
        </>
      )
    },
    {
      eventKey: "tab4",
      title: (
        <>
          <Fork /> مطاعم
        </>
      ),
      content: (
        <>
        <ContainerMedia>
        <TripsContent />
      </ContainerMedia>
        </>
      )
    }
  ];
  return (
    <div className="all-tabs-bio">
      <TabsContent
        tabsData={tabsDataBio}
        newClassTabsContent={"tabs-biography"}
      />
    </div>
  );
};

export default TabsBiography;
