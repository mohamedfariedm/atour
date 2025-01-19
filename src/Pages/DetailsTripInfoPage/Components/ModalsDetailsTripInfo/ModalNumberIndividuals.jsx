import CustomModal from "Components/CustomModal/CustomModal";
import CounterUpDown from "Components/Ui/CounterUpDown/CounterUpDown";
import { useState } from "react";

const ModalNumberIndividuals = ({
  showModalNumberIndividuals,
  hideModalNumberIndividuals
}) => {
  const [counterValue, setCounterValue] = useState(1);

  const handleCounterChange = (value) => {
    setCounterValue(value);
  };

  return (
    <CustomModal
      show={showModalNumberIndividuals}
      onHide={hideModalNumberIndividuals}
      title={"عدد الأفراد"}
      newClass={"modal-number-individuals"}
    >
      {/* ============ START ALL CONTENT NUMBER INDIVIDUALS ============== */}
      <div className="all-content-number-individuals d-flex  justify-content-center  flex-column  gap-3 align-items-center ">
        {/* ========== START CONTENT NUMBER ONE =========== */}
        <div className="content-number-one d-flex align-items-center  gap-3 flex-column">
          <h2 className="title">عدد البالغين</h2>
          <CounterUpDown
            initialValue={counterValue}
            minValue={1}
            maxValue={15}
            onChange={handleCounterChange}
          />
        </div>
        {/* ========== END CONTENT NUMBER ONE =========== */}
        {/* ========== START CONTENT NUMBER ONE =========== */}
        <div className="content-number-one d-flex align-items-center  gap-3 flex-column">
          <h2 className="title">عدد الأطفال</h2>
          <CounterUpDown
            initialValue={counterValue}
            minValue={1}
            maxValue={15}
            onChange={handleCounterChange}
          />
        </div>
        {/* ========== END CONTENT NUMBER ONE =========== */}
        <button className="btn-main w-100">حفظ</button>
      </div>
      {/* ============ END ALL CONTENT NUMBER INDIVIDUALS ============== */}
    </CustomModal>
  );
};

export default ModalNumberIndividuals;
