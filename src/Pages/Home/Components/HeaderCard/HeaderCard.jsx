import Car from "assets/images/IconsHeader/Car";
import "./HeaderCard.css";
import Hotel from "assets/images/IconsHeader/Hotel";
import Fork from "assets/images/IconsHeader/Fork";
import Tree from "assets/images/IconsHeader/Tree";
import Ticket from "assets/images/IconsHeader/Ticket";
import Gift from "assets/images/IconsHeader/Gift";
const HeaderCard = () => {
  const allButtons = [
    { text: "سيارات", icon: <Car /> },
    { text: "فنادق", icon: <Hotel /> },
    { text: "مطاعم", icon: <Fork /> },
    { text: "رحلات", icon: <Tree /> },
    { text: "فعاليات", icon: <Ticket /> },
    { text: "هدايا تذكارية", icon: <Gift /> }
  ];
  return (
    <div data-aos="fade-up" className="all-info-card padding-60 d-flex justify-content-center align-items-center gap-3 flex-wrap">
      {allButtons.map((item) => {
        return (
          <button className="btn-card-one">
            {item.icon} {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default HeaderCard;
