import CardFavorite from "Components/Ui/CardFavorite/CardFavorite";
import { cardsFavoriteData } from "./Data/DataCardFavorite";
import { useState } from "react";
import { Link } from "react-router-dom";
const CardsFavorite = () => {
  const [cards, setCards] = useState(cardsFavoriteData);

  const removeFromFavorites = (idToRemove) => {
    const updatedCards = cards.filter((card) => card.id !== idToRemove);
    setCards(updatedCards);
  };
  return (
    <div className="cards-favorite-content">
      {/* ========= START ALL CARDS FAVORITE CONTENT =========== */}
      <div className="all-cards-favorite-content" data-aos="fade-up">
        {/* ============= START ROW =========== */}
        <div className="row g-3">
          {cards.length > 0 ? (
            cards.map((item) => {
              return (
                <>
                  {/* ========== START COL =========== */}
                  <div className="col-12 col-sm-6 col-xl-12" key={item.id}>
                    <CardFavorite
                      newClassCard={"card-favorite-fav"}
                      idCard={item.id}
                      image={item.image}
                      textLocation={item.textLocation}
                      titleCard={item.titleCard}
                      NumPriceNew={`${item.NumPriceNew}$`}
                      isTrueNumTwo={false}
                      numInfoDangerOld={false}
                      rateNum={item.rateNum}
                      textContent={item.textContent}
                      isTrueTextOneCard_1={true}
                      textCardOne_1={item.textCardOne_1}
                      isTrueTextOneCard_2={true}
                      textCardOne_2={item.textCardOne_2}
                      removeFromFavorites={removeFromFavorites}
                      isFavoritePage={true}
                      isNewPage={false}
                      wishListCard={false}
                      addToWishList={false}
                    />
                  </div>
                  {/* ========== END COL =========== */}
                </>
              );
            })
          ) : (
            <>
              <p className="text-section-api fs-6 fw-medium text-center pt-5">
                لا يوجد منتجات فى المفضلة .{" "}
                <Link
                  to="/"
                  className="fs-6 fw-medium text-danger text-decoration-underline"
                >
                  الصفحة الرئيسية
                </Link>
              </p>
            </>
          )}
        </div>
        {/* ============= END ROW =========== */}
      </div>
      {/* ========= END ALL CARDS FAVORITE CONTENT =========== */}
    </div>
  );
};

export default CardsFavorite;
