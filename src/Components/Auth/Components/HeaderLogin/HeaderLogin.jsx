import imageLogo from "../../../../assets/images/login/logoLogin.svg";
import "./HeaderLogin.css";
const HeaderLogin = ({titleTop}) => {
  return (
    <div className="header-login-content mb-4 d-flex  justify-content-center align-items-center  gap-2 flex-column">
      <div className="logo-image">
        <img src={imageLogo} alt="imageLogo" width={"45px"} height={"62px"} />
      </div>
     <div className="info-header-login">
       <h2 className="title">{titleTop}</h2>
       <p className="text">من فضلك قم بتسجيل الدخول لتتمتع بتجربة أفضل</p>
     </div>
    </div>
  );
};

export default HeaderLogin;
