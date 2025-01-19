import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CustomModal from "Components/CustomModal/CustomModal";
import OtpForm from "../OtpForm/OtpForm";
import SuccessSend from "Components/Ui/SuccessSend/SuccessSend";

const FormAuth = ({ showModalForm, hideModalForm }) => {
  const [isLogin, setIsLogin] = useState(false);
  const buttonLogin = () => {
    setIsLogin(!isLogin);
  };
  // OTP FORM
  const [otpFormOpen, setOtpFormOpen] = useState(false);

  const hideOtpForm = () => {
    setOtpFormOpen(false);
  };

  // SUCCESS SEND MODAL
  const [successSend, setSuccessSend] = useState(false);
  const successSendButton = (e) => {
    e.preventDefault();
    setSuccessSend(true);
    hideOtpForm();
  };
  const hidesuccessSendButton = () => {
    setSuccessSend(false);
  };
  return (
    <>
      <SuccessSend
        showsuccessModalSend={successSend}
        hideSuccessModalSend={hidesuccessSendButton}
        titleModal={"تم التاكيد بنجاح."}
        titleSend={"تم الارسال بنجاح !"}
        isTrueText={true}
        textSend={"لقد تم تاكيد otp الخاص بك سجل الدخول الان !"}
        textButton={"تم"}
      />

      <OtpForm
        showOtpForm={otpFormOpen}
        hideOtpForm={hideOtpForm}
        successSendButton={successSendButton}
      />
      <CustomModal
        show={showModalForm}
        onHide={hideModalForm}
        title={`${!isLogin ? "تسجيل الدخول" : "تسجيل حساب جديد"}`}
        newClass={"login-modal"}
      >
        {!isLogin ? (
          <>
            <Login
              buttonLogin={buttonLogin}
              setOtpFormOpen={setOtpFormOpen}
              hideModalForm={hideModalForm}
            />
          </>
        ) : (
          <>
            <Register
              buttonLogin={buttonLogin}
              setOtpFormOpen={setOtpFormOpen}
              hideModalForm={hideModalForm}
            />
          </>
        )}
      </CustomModal>
    </>
  );
};

export default FormAuth;
