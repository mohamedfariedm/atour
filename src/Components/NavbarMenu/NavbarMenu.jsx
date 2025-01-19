import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import ContainerMedia from "Components/ContainerMedia/ContainerMedia";
import "./NavbarMenu.css";
import { useEffect, useState } from "react";
import LanguageSwitcher from "Components/Languages/LanguageSwitcher";
import ModalCart from "Components/Ui/ModalCart/ModalCart";
import CartIcon from "assets/Icons/CartIcon";
import HeartIcon from "assets/Icons/HeartIcon";
import UserDropMenu from "Components/Ui/UserDropMenu/UserDropMenu";
import FormAuth from "Components/Auth/FormAuth/FormAuth";
import SearchInputLocation from "Components/Ui/SearchInputLocation/SearchInputLocation";
const NavbarMenu = () => {
  // FIXED TOP NAVBAR
  const [isMenuFixed, setMenuFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const scrollTop = window.scrollY;
      const shouldBeFixed = scrollTop > 100; // Change 100 to the scroll position where you want the menu to become fixed
      // Update state to trigger the fixed or unfixed state of the menu
      setMenuFixed(shouldBeFixed);
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  }, []); // Runs only once on mount

  //  SHOW LOGIN FORM
  const [showLogin, setShowLogin] = useState(false);
  const buttonShowLogin = () => {
    setShowLogin(true);
  };
  const hideLogin = () => {
    setShowLogin(false);
  };

  // MODAL CART
  const [showModalCart, setShowModalCart] = useState(false);
  const buttonShowModalCart = () => {
    setShowModalCart(true);
  };
  const hideModalCart = () => {
    setShowModalCart(false);
  };

  return (
    <>
      <FormAuth showModalForm={showLogin} hideModalForm={hideLogin} />
      <ModalCart showModalCart={showModalCart} hideModalCart={hideModalCart} />
      <Navbar
        expand="lg"
        className={`navbar-menu z-3  ${isMenuFixed ? "menu-fixed" : ""}`}
      >
        <ContainerMedia>
          <Navbar.Brand data-aos="fade-left">
            <Link to="/" className="image-logo">
              <img src={logo} alt="logo" width={"81.59px"} height={"37.52px"} />
            </Link>
          </Navbar.Brand>
          {/* ========= START NAVBAR SEARCH ========= */}

          <div className="navbar-search" data-aos="fade-right">
            {/* ========== START SEARCH INPUT LOCATION ============= */}
            <SearchInputLocation />
            {/* ========== END SEARCH INPUT LOCATION ============= */}
          </div>
          {/* ========= START NAVBAR SEARCH ========= */}

          {/* ========= START MAIN LEFT ========= */}
          <div
            className="main-info-left d-flex align-items-center gap-3"
            data-aos="fade-right"
          >
            <div className="icon-lang icon-border">
              <LanguageSwitcher />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          {/* ========= END MAIN LEFT ========= */}

          <Navbar.Collapse id="basic-navbar-nav" className="nav-menu">
            <Nav className="me-auto" data-aos="fade-right">
              <NavLink className={"nav-link "} to="/eventsPage">
                {" "}
                الفعاليات
              </NavLink>
              <NavLink className={"nav-link "} to="/offers">
                {" "}
                عروض 🔥
              </NavLink>
              {/* ========== START SEARCH INPUT LOCATION ============= */}
              <SearchInputLocation />
              {/* ========== END SEARCH INPUT LOCATION ============= */}
            </Nav>
            <div className="left-nav-menu d-flex align-items-center  gap-3">
              <div className="icon-lang icon-border">
                <LanguageSwitcher />
              </div>
              <button className="btn-main" onClick={buttonShowLogin}>
                تسجيل الدخول
              </button>
            </div>
          </Navbar.Collapse>
        </ContainerMedia>
      </Navbar>

      {/* =============== START USER IS LOGIN ============= */}
      <div className="left-nav-menu--2">
        <div className="icon-lang icon-border">
          <LanguageSwitcher />
        </div>
        <div
          onClick={buttonShowModalCart}
          className="icon-cart-add icon-border"
        >
          <CartIcon />
        </div>
        <Link to="/favoritePage" className="icon-heart-fav icon-border">
          <HeartIcon />
        </Link>
        <UserDropMenu />
      </div>
      {/* =============== END USER IS LOGIN ============= */}
    </>
  );
};

export default NavbarMenu;
