import image1 from "../../../../assets/images/CardImages/01.png";
import image2 from "../../../../assets/images/CardImages/02.png";
import image3 from "../../../../assets/images/CardImages/03.png";
import image4 from "../../../../assets/images/CardImages/04.png";
import TitleSection from "Components/TitleSection/TitleSection";
import "./ImagesCard.css";
import { Link } from "react-router-dom";

const ImagesCard = () => {
  const cardsImages = [
    { id: 0, image: image1, text: "المدينة المنورة" },
    { id: 1, image: image2, text: "الرياض" },
    { id: 2, image: image3, text: "مكة المكرمة" },
    { id: 3, image: image4, text: "المدينة المنورة" },
    { id: 4, image: image4, text: "المدينة المنورة" },
    { id: 5, image: image3, text: "الرياض" },
    { id: 6, image: image2, text: "مكة المكرمة" },
    { id: 7, image: image1, text: "المدينة المنورة" }
  ];
  return (
    <div className="images-card-content padding-top">
      {/* =========== START SECTION TITLE ========== */}
      <TitleSection
        title={"الوجهات الأكثر زيارة"}
        text={
          "ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
        }
      />
      {/* =========== END SECTION TITLE ============ */}

      {/* =========== START ALL IMAGES CARD =========== */}
      <div className="all-images-card" data-aos="fade-up">
        {/* ============ START ROW ========== */}
        <div className="row g-3">
          {cardsImages.map((item) => {
            return (
              <>
                {/* ============= START COL ========== */}
                <div key={item.id} className="col-6 col-md-4 col-lg-3">
                 <Link to="/biographyPage">
                   {/* ============ START CARD IMAGE ONE =========== */}
                   <div className="card-image-one">
                     <div className="image-card position-relative overlay-bg">
                       <img
                         src={item.image}
                         alt="imageCard"
                         loading="lazy"
                         className="w-100 h-100 object-fit-cover image-card-src"
                       />
                     </div>
                     <div className="content-info">
                       <h2 className="title">{item.text}</h2>
                     </div>
                   </div>
                   {/* ============ END CARD IMAGE ONE =========== */}
                 </Link>
                </div>
                {/* ============= END COL ========== */}
              </>
            );
          })}
        </div>
        {/* ============ END ROW ========== */}
      </div>
      {/* =========== END ALL IMAGES CARD =========== */}
    </div>
  );
};

export default ImagesCard;
