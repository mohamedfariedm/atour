import { Dropdown } from "react-bootstrap";
import imgUser from "../../../assets/images/users/01.png";
import UserIcon from "assets/images/AccountUser/UserIcon";
import DateIcon from "assets/images/IconsBooks/DateIcon";
import flagSa from "../../../assets/images/flag/sa.svg";
import LogOutIcon from "assets/images/AccountUser/LogOutIcon";
import { Link } from "react-router-dom";

const UserDropMenu = () => {
  return (
    <div className="dropmenu-user">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic--1" className="drop-user">
          <div className="image-user-login  d-flex align-items-center  justify-content-center ">
            <img src={imgUser} alt="imgUser" width={"45px"} height={"45px"} />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link className="link-drop-item" to="/accountUser">
              {" "}
              <UserIcon /> معلومات الحساب
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className="link-drop-item" to="/reservations">
              {" "}
              <DateIcon /> حجوزاتي
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <img src={flagSa} alt="flag" width={"24px"} height={"24px"} />
            ريال سعودي{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/" className="link-drop-item logout-drop">
              <LogOutIcon /> تسجيل الخروج
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserDropMenu;
