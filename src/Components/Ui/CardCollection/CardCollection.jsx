import "./CardCollection.css";
import IconLocation from "assets/images/collection/IconLocation";
import IconStarRate from "assets/images/collection/IconStarRate";
import HeartIconCollection from "assets/images/collection/HeartIconCollection";
import { Link } from "react-router-dom";

const CardCollection = ({
  itemId,
  imageCard,
  infoPlaceCard,
  numRate,
  titleCard,
  numPriceCard,
  wishList,
  addToWishList
}) => {
  const isWishListed = wishList.includes(itemId); // CHECK IF THE CURRENT ITEM IS IN WISHLIST

  return (
    <>
      {/* ============ START CARD COLLECTION ONE =========== */}
      <Link to={`/${itemId}`} className="card-collection-one">
        {/* =========== START IMAGE COLLECTION =========== */}
        <div className="image-collection overlay-bg">
          <img
            src={imageCard}
            alt="imageCollection"
            loading="lazy"
            className="w-100 h-100 object-fit-cover"
          />
          <div
            className={`icon-heart ${isWishListed ? "activeHeart" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              addToWishList(itemId);
            }}
          >
            <HeartIconCollection />
          </div>
          <div className="info-text">
            <IconLocation /> {infoPlaceCard}
          </div>
        </div>
        {/* =========== END IMAGE COLLECTION =========== */}
        {/* =========== START CONTENT INFO CARD ========== */}
        <div className="content-info-card pt-3">
          <div className="rate-card d-flex align-items-center gap-1">
            <IconStarRate /> {numRate} تقييم
          </div>
          <h2 className="title">{titleCard}</h2>
          <div className="price-info">
            تبدأ من <span className="price-num">{numPriceCard}</span> / للفرد
          </div>
        </div>
        {/* =========== END CONTENT INFO CARD ========== */}
      </Link>
      {/* ============ END CARD COLLECTION ONE =========== */}
    </>
  );
};

export default CardCollection;
