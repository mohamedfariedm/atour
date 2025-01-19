import ImageLogin from "../Components/ImageLogin/ImageLogin";
import HeaderLogin from "../Components/HeaderLogin/HeaderLogin";
import FormField from "Components/Forms/FormFiled";
import InputFiled from "Components/Forms/InputField";
import * as Yup from "yup";
import EndLoginInfo from "../Components/EndLoginInfo/EndLoginInfo";

const Register = ({ buttonLogin, hideModalForm, setOtpFormOpen }) => {
  const validationSchema = Yup.object().shape({
    emailRegOrPhoneNumber: Yup.string()
      .required("ادخل البريد الإلكتروني أو رقم الهاتف")
      .test(
        "رقم الهاتف او البريد الالكترونى",
        "رقم هاتف او الايميل خطأ",
        function (value) {
          return (
            Yup.string().email().isValidSync(value) ||
            Yup.string()
              .matches(/^[0-9]{10,14}$/, {
                message: "رقم هاتف خطأ",
                excludeEmptyString: true
              })
              .isValidSync(value)
          );
        }
      )
  });

  const initialValues = {
    emailRegOrPhoneNumber: ""
  };

  const handleRegisterSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    if (values) {
      setOtpFormOpen(true);
      hideModalForm();
    }
  };

  return (
    <>
      <div className="info-login-content">
        {/* =========== START ROW =========== */}
        <div className="row g-4 g-md-3">
          {/* ============= START COL ============ */}
          <div className="col-12 col-md-6">
            <HeaderLogin titleTop={"تسجيل حساب جديد"} />
            {/* ========== START FORM FIELD ========= */}
            <FormField
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegisterSubmit}
            >
              <InputFiled
                label="البريد الإلكتروني أو رقم الهاتف"
                name="emailRegOrPhoneNumber"
                type="text"
                placeholder=""
                success
              />

              <button type="submit" className="btn-main btn-submit w-100 mt-3">
                إرسال رمز الامان
              </button>
            </FormField>
            {/* ========== END FORM FIELD ========= */}
            <div className="bottom-info-not-accout gap-2 d-flex justify-content-center   align-items-center ">
              لديك حساب بالفعل ؟{" "}
              <div
                onClick={buttonLogin}
                className="link-a cursor-pointer-event text-decoration-underline"
              >
                تسجيل الدخول
              </div>
            </div>
            <EndLoginInfo />
          </div>
          {/* ============= END COL ============ */}
          {/* ============= START COL ============ */}
          <div className="col-12 col-md-6">
            {/* ============ START LOGIN IMAGE ========== */}
            <ImageLogin />
            {/* ============ END LOGIN IMAGE ========== */}
          </div>
          {/* ============= END COL ============ */}
        </div>
        {/* =========== END ROW =========== */}
      </div>
    </>
  );
};

export default Register;
