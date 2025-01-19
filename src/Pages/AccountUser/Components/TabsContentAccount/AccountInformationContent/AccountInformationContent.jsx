import EditIconUser from "assets/images/AccountUser/EditIconUser";
import "./AccountInfo.css";
import { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import "../../../../../../node_modules/react-intl-tel-input/dist/components/utils.js";
import ModalEditInfoAccount from "./ModalEditInfoAccount";
const AccountInformationContent = () => {
  const [phoneNumber, setPhoneNumber] = useState("+966 555 555 555");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handlePhoneNumberChange = (value, country) => {
    setPhoneNumber(value);
    setSelectedCountry(country.iso2);
  };

  // SHOW MODAL EDIT
  const [emailValue, setEmailValue] = useState("name@example.com");
  const [showModalEditAccount, setShowModalEditAccount] = useState(false);
  const buttonShowEditModal = () => {
    setShowModalEditAccount(true);
  };
  const hideModalEditInfoAccount = () => {
    setShowModalEditAccount(false);
  };

  return (
    <>
      <ModalEditInfoAccount
        showModalEditInfoAccount={showModalEditAccount}
        hideModalEditInfoAccount={hideModalEditInfoAccount}
        initialValue={emailValue}
      />
      <div className="account-information-content">
        <h2 className="title title-info-top-account pb-3">معلومات الحساب</h2>
        <form action="">
          <div className="mb-3 form-input-one-control">
            <label htmlFor="emailFormControlInput1" className="form-label">
              البريد الإلكتروني
            </label>
            <div className="input-control position-relative">
              <input
                type="email"
                className="form-control"
                id="emailFormControlInput1"
                placeholder="name@example.com"
                value={"name@example.com"}
                readOnly
              />

              <div className="icon-edit-input" onClick={buttonShowEditModal}>
                <EditIconUser />
              </div>
            </div>
          </div>
          <div className="mb-3 form-input-one-control">
            <label htmlFor="phoneControlInput1" className="form-label">
              رقم الهاتف
            </label>
            <div className="input-control input-number-tel position-relative">
              <div>
                <IntlTelInput
                  containerClassName="intl-tel-input"
                  inputClassName="form-control"
                  defaultCountry="sa"
                  defaultValue={phoneNumber}
                  placeholder="رقم الهاتف"
                  onChange={handlePhoneNumberChange}
                  separateDialCode={true}
                />
              </div>
              <div className="icon-edit-input">
                <EditIconUser />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountInformationContent;
