import SliderFavorite from "./Components/SliderFavorite/SliderFavorite";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import CardsFavorite from "./Components/CardsFavorite/CardsFavorite";
import TabsContent from "Components/Ui/TabsContent/TabsContent";
import Tree from "assets/images/IconsHeader/Tree";
import Hotel from "assets/images/IconsHeader/Hotel";
import Fork from "assets/images/IconsHeader/Fork";
import Gift from "assets/images/IconsHeader/Gift";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";

const FavoritePage = () => {
  const tabsData = [
    {
      eventKey: "tab1",
      title: (
        <>
          <Tree /> رحلات
        </>
      ),
      content: <CardsFavorite />
    },
    {
      eventKey: "tab2",
      title: (
        <>
          <Hotel /> فنادق
        </>
      ),
      content: <CardsFavorite />
    },
    {
      eventKey: "tab3",
      title: (
        <>
          <Fork /> مطاعم
        </>
      ),
      content: <CardsFavorite />
    },
    {
      eventKey: "tab4",
      title: (
        <>
          <Gift /> هدايا تذكارية
        </>
      ),
      content: <CardsFavorite />
    }
  ];
  return (
    <>
      <HelmetInfo titlePage={"المفضلة"} />

      <div className="favorite-page">
        <header>
          <SliderFavorite />
        </header>
        <main>
          <div className="all-content-favorite padding-80">
            {/* ========== START CONTAINER =========== */}
            <ContainerMedia>
              <TabsContent
                tabsData={tabsData}
                newClassTabsContent={"tabs-favorite"}
              />
            </ContainerMedia>
            {/* ========== END CONTAINER =========== */}
          </div>
        </main>
      </div>
    </>
  );
};

export default FavoritePage;
