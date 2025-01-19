import "./AccountUser.css";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import InformationIcon from "assets/images/AccountUser/InformationIcon";
import SettingsIcon from "assets/images/AccountUser/SettingsIcon";
import UserIcon from "assets/images/AccountUser/UserIcon";
import PayIcon from "assets/images/IconsBooks/PayIcon";
import { useEffect, useState } from "react";
import UserInfo from "./Components/UserInfo";
import LogOutIcon from "assets/images/AccountUser/LogOutIcon";
import PersonalInformation from "./Components/TabsContentAccount/PersonalInformation/PersonalInformation";
import AccountInformationContent from "./Components/TabsContentAccount/AccountInformationContent/AccountInformationContent";
import PayInformationTab from "./Components/TabsContentAccount/PayInformationTab/PayInformationTab";
import SettingsTab from "./Components/TabsContentAccount/SettingsTab/SettingsTab";
import { Link } from "react-router-dom";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import ProfileAPI from "api/profileApi";
const AccountUser = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "المعلومات الشخصية", icon: <UserIcon />, active: true },
    {
      id: 2,
      title: "معلومات الحساب",
      icon: <InformationIcon />,
      active: false
    },
    { id: 3, title: "معلومات الدفع", icon: <PayIcon />, active: false },
    { id: 4, title: "الإعدادات", icon: <SettingsIcon />, active: false }
  ]);

  useEffect(() => {
    // Fetch profile data on component mount
    const fetchProfile = async () => {
      try {
        const data = await ProfileAPI.getProfile();
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
      }
    };

    fetchProfile();
  }, []);
  const handleTabClick = (id) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        active: tab.id === id
      }))
    );
  };
  return (
    <>
      <HelmetInfo titlePage={"حسابى"} />

      <main>
        <div className="account-user-content padding-80">
          <ContainerMedia>
            <div className="all-tabs-content-account ">
              {/* ================= START ROW =========== */}
              <div className="row g-3 align-items-start ">
                {/* ============= START COL ============= */}
                <div className="col-12 col-md-4 col-xl-3">
                  <ul
                    data-aos="fade-down"
                    className="nav nav-pills flex-column nav-pills border-account-user h-100"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <UserInfo />
                    </li>

                    {tabs.map((tab) => (
                      <li
                        key={tab.id}
                        className="nav-item nav-item-info"
                        role="presentation"
                      >
                        <button
                          className={`nav-link ${
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
                    <li className="nav-item" role="presentation">
                      <Link
                        to="/"
                        className="logout-button d-flex  align-items-center  gap-2 "
                      >
                        <LogOutIcon /> تسجيل الخروج
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* ============= END COL ============= */}
                {/* ============= START COL ============= */}
                <div className="col-12 col-md-8 col-xl-9">
                  {/* ============ START CONTENT INFO TABS ACCOUNT =============== */}
                  <div
                    className="tab-content w-100 border-account-user h-100"
                    id="pills-tabContent"
                    data-aos="fade-up"
                  >
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={`tab-pane fade ${
                          tab.active ? "show active" : ""
                        }`}
                        id={`pills-${tab.title.toLowerCase()}`}
                        role="tabpanel"
                        aria-labelledby={`pills-${tab.title.toLowerCase()}-tab`}
                      >
                        {/* Content for each tab */}
                        {tab.title === "المعلومات الشخصية" && (
                          <>
                            <PersonalInformation />{" "}
                          </>
                        )}
                        {tab.title === "معلومات الحساب" && (
                          <>
                            <AccountInformationContent />
                          </>
                        )}
                        {tab.title === "معلومات الدفع" && (
                          <>
                            <PayInformationTab />
                          </>
                        )}
                        {tab.title === "الإعدادات" && (
                          <>
                            {" "}
                            <SettingsTab />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* ============ END CONTENT INFO TABS ACCOUNT =============== */}
                </div>
                {/* ============= END COL ============= */}
              </div>
              {/* ================= END ROW =========== */}
            </div>
          </ContainerMedia>
        </div>
      </main>
    </>
  );
};

export default AccountUser;
