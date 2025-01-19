import CustomModal from "Components/CustomModal/CustomModal";
import { useRef, useState } from "react";
import image_1 from "../../../../../assets/images/users/user.png";
import EditIconUser from "assets/images/AccountUser/EditIconUser";
import InputField from "Components/Forms/InputField";
import FormField from "Components/Forms/FormFiled";
import * as Yup from "yup";
import SelectField from "Components/Forms/SelectField";
import LoaderSvg from "assets/Icons/LoaderSvg";
import { toast } from "react-toastify";
import DatePickerComponent from "Components/Ui/DatePickerComponent/DatePickerComponent";

const ModalEditPersonalInformation = ({
  showModalEditInformation,
  hideModalEditInformation
}) => {
  // EDIT IMAGE
  const [image, setImage] = useState(image_1);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(selectedImage);
  };

  const initialValues = {
    name: "",
    nationality: "",
    dateOfBirth: "",
    userType: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("الاسم مطلوب"),
    nationality: Yup.string().required("الجنسية مطلوبة"),
    dateOfBirth: Yup.date().required("تاريخ الميلاد مطلوب"),
    userType: Yup.string().required("نوع المستخدم مطلوب")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const optionSelect = [
    { value: "1", label: "سعودي" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" }
  ];
  const optionSelectType = [
    { value: "1", label: "ذكر" },
    { value: "2", label: "انثى" }
  ];

  //   BUTTONS
  const [activeButtons, setActiveButtons] = useState([]);

  const buttons = [
    "البحر",
    "الثقافة",
    "الطبيعة",
    "المغامرات",
    "البحر",
    "الثقافة",
    "الطبيعة",
    "المغامرات",
    "البحر",
    "الثقافة",
    "الطبيعة"
  ];

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      // Toggle the active button
      if (prevActiveButtons.includes(index)) {
        // If the button is already active, remove active
        return prevActiveButtons.filter((buttonIndex) => buttonIndex !== index);
      } else {
        // If the button is not active, add active
        return [...prevActiveButtons, index];
      }
    });
  };

  //   Button Save Data
  const [activeButton, setActiveButton] = useState(false);
  const buttonSaveData = () => {
    setActiveButton(true); // ADD ACTIVE TO LOADER
    setTimeout(() => {
      // TIME TO REMOVE LOADER
      setActiveButton(false);
    }, 800);

    setTimeout(() => {
      //TIME TO HIDE MODAL AND ADD TOAST
      hideModalEditInformation();
      toast.success("تم الحفظ بنجاح.");
    }, 820);
  };

  return (
    <CustomModal
      show={showModalEditInformation}
      onHide={hideModalEditInformation}
      title={"تعديل المعلومات الشخصية"}
      newClass={"modal-edit-information"}
    >
      {/* ============== START ALL CONTENT EDIT INFORMATION ============= */}
      <div className="all-content-edit-info">
        {/* ================ START IMAGE USER EDIT =============== */}
        <div className="image-user-edit position-relative overlay-bg">
          <img src={image} alt="User" className="image-edit" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            className="edit-btn--1"
            onClick={() => fileInputRef.current.click()}
          >
            <EditIconUser />
          </button>
        </div>
        {/* ================ END IMAGE USER EDIT =============== */}
        {/* ================ START FORM EDIT CONTENT ========== */}
        <div className="form-edit-content form-edit-content--2">
          <FormField
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {/* =============== START ROW ============= */}
            <div className="row g-3 align-items-center ">
              {/* ============ START COL ============= */}
              <div className="col-12 col-md-6">
                <InputField
                  label="الإسم"
                  name="name"
                  type="text"
                  placeholder="أدخل اسمك"
                  success
                />
              </div>
              {/* ============ END COL ============= */}
              {/* ============ START COL ============= */}
              <div className="col-12 col-md-6">
                <div className="form-select-info">
                  <label htmlFor="selectNation">الجنسية</label>
                  <SelectField
                    name={"nationality"}
                    options={optionSelect}
                    valueSelected={"الجنسية"}
                  />
                </div>
              </div>
              {/* ============ END COL ============= */}
              {/* ============ START COL ============= */}
              <div className="col-12 col-md-6">
                <label htmlFor="datePic" className=" form-label">
                  تاريخ الميلاد
                </label>
                <div
                  className="main-add-place-date--1 main-date-picker--1"
                  id="datePic"
                >
                  <DatePickerComponent addTextPlaceHolder={"تاريخ الميلاد"} />
                </div>
              </div>
              {/* ============ END COL ============= */}
              {/* ============ START COL ============= */}
              <div className="col-12 col-md-6">
                <div className="form-select-info">
                  <label htmlFor="userType-1">الجنس</label>
                  <SelectField
                    name={"userType"}
                    options={optionSelectType}
                    valueSelected={"الجنس"}
                  />
                </div>
              </div>
              {/* ============ END COL ============= */}
            </div>
            {/* =============== END ROW ============= */}
          </FormField>
        </div>
        {/* ================ END FORM EDIT CONTENT ========== */}
        <div className="intersted-content">
          <h2 className="title title-info-top-account">الإهتمامات</h2>
          <div className="buttons-inter change-scroll d-flex  align-items-center  gap-3 flex-wrap ">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`main-btn-filter ${
                  activeButtons.includes(index) ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="main-btn-save d-flex justify-content-end align-items-end  justify-content-end ">
          <button
            className="btn-main btn-save btn-height"
            onClick={buttonSaveData}
          >
            {activeButton === false ? (
              "حفظ"
            ) : (
              <>
                <LoaderSvg />
              </>
            )}
          </button>
        </div>
      </div>
      {/* ============== END ALL CONTENT EDIT INFORMATION ============= */}
    </CustomModal>
  );
};

export default ModalEditPersonalInformation;
