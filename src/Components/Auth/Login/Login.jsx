import ImageLogin from "../Components/ImageLogin/ImageLogin";
import HeaderLogin from "../Components/HeaderLogin/HeaderLogin";
import FormField from "Components/Forms/FormFiled";
import InputFiled from "Components/Forms/InputField";
import * as Yup from "yup";
import EndLoginInfo from "../Components/EndLoginInfo/EndLoginInfo";
import "./Login.css";
const Login = ({ buttonLogin, hideModalForm, setOtpFormOpen }) => {
  const validationSchema = Yup.object().shape({
    emailOrPhoneNumber: Yup.string()
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
    emailOrPhoneNumber: ""
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    if (values) {
      hideModalForm();
      setOtpFormOpen(true);
    }
  };
  return (
    <>
      <div>
        <div className="info-login-content">
          {/* =========== START ROW =========== */}
          <div className="row g-4 g-md-3">
            {/* ============= START COL ============ */}
            <div className="col-12 col-md-6">
              <HeaderLogin titleTop={"مرحبا بك في جولة"} />
              {/* ========== START FORM FIELD ========= */}
              <FormField
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <InputFiled
                  label="البريد الإلكتروني أو رقم الهاتف"
                  name="emailOrPhoneNumber"
                  type="text"
                  placeholder=""
                  success
                />

                <button
                  type="submit"
                  className="btn-main btn-submit w-100 mt-3"
                >
                  تسجيل دخول
                </button>
              </FormField>
              {/* ========== END FORM FIELD ========= */}
              <div className="bottom-info-not-accout gap-2 d-flex justify-content-center   align-items-center ">
                ليس لديك حساب ؟{" "}
                <div
                  onClick={buttonLogin}
                  className="cursor-pointer-event text-decoration-underline link-a"
                >
                  تسجيل حساب جديد
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
      </div>
    </>
  );
};

export default Login;
