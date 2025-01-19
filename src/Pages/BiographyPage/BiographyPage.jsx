import BreadcrumbsPage from "Components/Ui/BreadcrumbsPage/BreadcrumbsPage";
import "./BiographyPage.css";
import TabsBiography from "./Components/TabsBiography/TabsBiography";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";

const BiographyPage = () => {
  return (
    <>
      <HelmetInfo titlePage={"نبذة تعريفية"} />

      <div className="biography-page padding-60">
        <header>
          <BreadcrumbsPage
            newClassBreadHeader={"biography-bread breadcrumb-page-2"}
            routeTitleTwoBread={false}
            titleTwoBread={"المدينة المنورة"}
            textBreadActive={"نبذة تعريفية"}
          />
        </header>
        <main>
          <TabsBiography />
        </main>
      </div>
    </>
  );
};

export default BiographyPage;
