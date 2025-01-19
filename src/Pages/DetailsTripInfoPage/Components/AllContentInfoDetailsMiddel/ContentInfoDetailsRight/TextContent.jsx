import ReadMoreText from "Components/Ui/ReadMoreText/ReadMoreText";
import WhatsAppIcon from "assets/Icons/WhatsAppIcon";


const TextContent = () => {
  const text = `ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
    من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
    الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`;

  return (
    <div className="all-text-content-info margin-top-1 d-flex flex-column gap-3">
      {/* ============ START TEXT CONTENT ONE =========== */}
      <div className="text-content-one border-top pt-3">
        <h2 className="title">لماذا تحجز الرحلة</h2>
        <ReadMoreText newClass="mt-2" text={text} maxLength={120} />
      </div>
      {/* ============ END TEXT CONTENT ONE =========== */}
      {/* ============ START TEXT CONTENT ONE =========== */}
      <div className="text-content-one border-top pt-3">
        <h2 className="title">سياسة إلغاء الحجز</h2>
        <ReadMoreText newClass="mt-2" text={text} maxLength={120} />
      </div>
      {/* ============ END TEXT CONTENT ONE =========== */}
      {/* ============ START CONTACT US ============ */}
      <div className="contact-us-content border-top pt-4 d-flex justify-content-between align-items-center gap-2 flex-wrap">
        <h2 className="title">لطلبات الشركات تواصل معنا</h2>
        <a
          href="https://wa.me/01211456847"
          target="_blank"
          className="link-whatsapp btn-main"
        >
          واتساب <WhatsAppIcon />
        </a>
      </div>
      {/* ============ END CONTACT US ============ */}
    </div>
  );
};

export default TextContent;
