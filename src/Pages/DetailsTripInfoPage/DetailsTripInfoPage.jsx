import BreadcrumbsPage from "Components/Ui/BreadcrumbsPage/BreadcrumbsPage";
import TopContentInfo from "./Components/TopContentInfo/TopContentInfo";
import SliderDetailsContent from "./Components/SliderDetailsContent/SliderDetailsContent";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import AllContentInfoDetailsMiddel from "./Components/AllContentInfoDetailsMiddel/AllContentInfoDetailsMiddel";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
const DetailsTripInfoPage = () => {
  return (
    <>
      <HelmetInfo titlePage={"تفاصيل"} />

      <div className="details-trip-info-page padding-60">
        <header>
          <BreadcrumbsPage
            newClassBreadHeader={"biography-bread breadcrumb-page-2"}
            routeTitleTwoBread={false}
            titleTwoBread={"رحلات"}
            textBreadActive={"تفاصيل الرحلة"}
          />
        </header>
        <main>
          <ContainerMedia>
            <div className="all-info-page-details pt-3">
              <TopContentInfo />
              <SliderDetailsContent />
              <AllContentInfoDetailsMiddel />
            </div>
          </ContainerMedia>
        </main>
      </div>
    </>
  );
};

export default DetailsTripInfoPage;
