import TabsContent from "Components/Ui/TabsContent/TabsContent";
import Fork from "assets/images/IconsHeader/Fork";
import Hotel from "assets/images/IconsHeader/Hotel";
import Tree from "assets/images/IconsHeader/Tree";
import AllCardsReservations from "./AllCardsReservations/AllCardsReservations";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import { useState } from "react";

const TabsReservations = () => {
  const tabsData = [
    {
      eventKey: "tab1",
      title: (
        <>
          <Tree /> رحلات
        </>
      ),
      content: <AllCardsReservations />
    },
    {
      eventKey: "tab2",
      title: (
        <>
          <Hotel /> فنادق
        </>
      ),
      content: <AllCardsReservations />
    },
    {
      eventKey: "tab3",
      title: (
        <>
          <Fork /> مطاعم
        </>
      ),
      content: <AllCardsReservations />
    }
  ];

  const [tabs_1, setTabs_1] = useState([
    { id: 1, title: "الحالية", icon: "", active: true },
    {
      id: 2,
      title: "المنتهية",
      icon: "",
      active: false
    }
  ]);

  const handleTabClick = (id) => {
    setTabs_1(
      tabs_1.map((tab) => ({
        ...tab,
        active: tab.id === id
      }))
    );
  };

  return (
    <div className="all-tabs-reservation padding-80">
      <ContainerMedia>
        <div className="all-tabs-reservation-info" data-aos="fade-right">
          <ul
            className="nav nav-content--2 nav-pills gap-3 flex-wrap   nav-pills border-account-user h-100"
            id="pills-tab"
            role="tablist"
          >
            {tabs_1.map((tab) => (
              <li
                key={tab.id}
                className="nav-item nav-item-info"
                role="presentation"
              >
                <button
                  className={`nav-link main-btn-filter--1  ${
                    tab.active ? "active" : ""
                  } position-relative`}
                  id={`pills-${tab.title}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#pills-${tab.title.toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-controls={`pills-${tab.title.toLowerCase()}`}
                  aria-selected={tab.active ? "true" : "false"}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.icon} {tab.title}
                </button>
              </li>
            ))}
          </ul>

          {/* ============ START CONTENT INFO TABS ACCOUNT =============== */}
          <div
            className="tab-content w-100 border-account-user h-100"
            id="pills-tabContent"
          >
            {tabs_1.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${tab.active ? "show active" : ""}`}
                id={`pills-${tab.title.toLowerCase()}`}
                role="tabpanel"
                aria-labelledby={`pills-${tab.title.toLowerCase()}-tab`}
              >
                {/* Content for each tab */}
                {tab.title === "الحالية" && (
                  <>
                    <TabsContent
                      tabsData={tabsData}
                      newClassTabsContent={"tabs-reservations-content-1"}
                    />
                  </>
                )}
                {tab.title === "المنتهية" && (
                  <>
                    {" "}
                    <TabsContent
                      tabsData={tabsData}
                      newClassTabsContent={"tabs-reservations-content-1"}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          {/* ============ END CONTENT INFO TABS ACCOUNT =============== */}
        </div>
      </ContainerMedia>
    </div>
  );
};

export default TabsReservations;
