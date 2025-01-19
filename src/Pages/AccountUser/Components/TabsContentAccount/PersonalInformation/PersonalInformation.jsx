import FormField from "Components/Forms/FormFiled";
import InputField from "Components/Forms/InputField";
import React, { useState } from "react";
import * as Yup from "yup";
import ModalEditPersonalInformation from "./ModalEditPersonalInformation";

const PersonalInformation = () => {
  const initialValues = {
    name: "محمد علي",
    nationality: "سعودي",
    dateOfBirth: "1/1/1994",
    userType: "ذكر"
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

  // MODAL EDIT INFORMATION
  const [showEditModal, setShowEditModal] = useState(false);
  const showEditInfoButton = () => {
    setShowEditModal(true);
  };
  const hideEditInfoButton = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <ModalEditPersonalInformation
        showModalEditInformation={showEditModal}
        hideModalEditInformation={hideEditInfoButton}
      />
      <div className="personal-information-content">
        <h2 className="title title-info-top-account pb-1">المعلومات الشخصية</h2>

        <FormField
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {/* =============== START ROW ============= */}
          <div className="row g-3">
            {/* ============ START COL ============= */}
            <div className="col-12 col-md-6">
              <InputField
                label="الإسم"
                name="name"
                type="text"
                placeholder="أدخل اسمك"
                success
                readOnly
              />
            </div>
            {/* ============ END COL ============= */}
            {/* ============ START COL ============= */}
            <div className="col-12 col-md-6">
              <InputField
                label="الجنسية"
                name="nationality"
                type="text"
                placeholder="أدخل جنسيتك"
                success
                readOnly
              />
            </div>
            {/* ============ END COL ============= */}
            {/* ============ START COL ============= */}
            <div className="col-12 col-md-6">
              <InputField
                label="تاريخ الميلاد"
                name="dateOfBirth"
                type="text"
                placeholder=" تاريخ ميلادك"
                success
                readOnly
              />
            </div>
            {/* ============ END COL ============= */}
            {/* ============ START COL ============= */}
            <div className="col-12 col-md-6">
              <InputField
                label="الجنس "
                name="userType"
                type="select"
                placeholder="الجنس "
                success
                readOnly
              />
            </div>
            {/* ============ END COL ============= */}
          </div>
          {/* =============== END ROW ============= */}
        </FormField>

        <div className="intersted-content">
          <h2 className="title title-info-top-account">الإهتمامات</h2>
          <div className="buttons-inter change-scroll d-flex  align-items-center   gap-3">
            <button className="main-btn-filter">البحر</button>
            <button className="main-btn-filter">الثقافة</button>
            <button className="main-btn-filter">الطبيعة</button>
            <button className="main-btn-filter">المغامرات</button>
          </div>
        </div>

        <button
          onClick={showEditInfoButton}
          className="btn-main edit-information-btn"
        >
          تعديل
        </button>
      </div>
    </>
  );
};

export default PersonalInformation;
