import { useState, useEffect, useRef } from "react";
import CustomModal from "Components/CustomModal/CustomModal";
import "./OtpForm.css";
import EmailIcon from "assets/images/footerIcons/EmailIcon";

const OtpForm = ({ showOtpForm, hideOtpForm, successSendButton }) => {
  const [otpTimer, setOTPTimer] = useState(60); // Initial timer value in seconds
  const [timerRunning, setTimerRunning] = useState(false); // State if timer is running
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  let timerInterval;

  useEffect(() => {
    if (showOtpForm) {
      startTimer();
    } else {
      clearInterval(timerInterval);
      setTimerRunning(false);
      setOTPTimer(60); // Reset timer value
    }
  }, [showOtpForm]);

  // Function to start the timer
  const startTimer = () => {
    setTimerRunning(true);
    timerInterval = setInterval(() => {
      setOTPTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(timerInterval);
          setTimerRunning(false);
          return 0;
        }
      });
    }, 1000); // Update the timer every second
  };

  // Function to handle OTP input changes
  const handleInputChange = (index, e) => {
    const value = e.target.value;

    const nextIndex = index + 1;

    if (value.length === 1 && nextIndex <= 3) {
      focusInput(nextIndex);
    }
  };

  // Function to handle key down events
  const handleKeyDown = (index, e) => {
    const value = e.target.value;
    const prevIndex = index - 1;

    if (e.key === "Backspace" && index > 0 && value.length === 0) {
      focusInput(prevIndex);
    }
  };

  // Function to focus input field
  const focusInput = (index) => {
    if (inputRefs[index] && inputRefs[index].current) {
      inputRefs[index].current.focus();
    }
  };

  // Function to handle resend OTP
  const handleResendOTP = () => {
    setOTPTimer(60); // Reset timer to initial value
    startTimer(); // Start the timer
  };

  // Format the timer value for display
  const formatTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <CustomModal
        show={showOtpForm}
        onHide={hideOtpForm}
        title={"قم بإدخال رمز الامان"}
        newClass={"otp-form-modal"}
      >
        <div className="info-otp-form">
          <div className="icon-email">
            <EmailIcon />
          </div>
          <div className="info-header-otp mt-3">
            <h2 className="title">قم بإدخال رمز الامان</h2>
            <p className="text">
              من فضلك قم بإدخال رمز الأمان الذي تم إرساله إلى بريدك الإكرتوني{" "}
              <span>example@gmail.com</span>
            </p>
            {timerRunning ? (
              <div className="timer-down-otp">
                إعادة إرسال خلال{" "}
                <span className="timer-otp">{formatTimer(otpTimer)}</span> ث
              </div>
            ) : (
              <div
                className="resend-otp-link timer-down-otp"
                onClick={handleResendOTP}
              >
                إعادة إرسال رمز الأمان
              </div>
            )}
          </div>
          <div className="otp-form">
            <form action="">
              <div className="all-input-otp d-flex align-items-center justify-content-center gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    name={`digit${index + 1}`}
                    className="form-control"
                    maxLength={1}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={inputRefs[index]}
                  />
                ))}
              </div>
              <button
                onClick={successSendButton}
                className="btn-main btn-page-otp w-100"
              >
                تأكيد رمز الامان
              </button>
            </form>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default OtpForm;
