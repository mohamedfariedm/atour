import PaginationPage from "Components/Pagination/Pagination";
import CardFavorite from "Components/Ui/CardFavorite/CardFavorite";
import { cardsFavoriteData } from "Pages/FavoritePage/Components/CardsFavorite/Data/DataCardFavorite";
import BarsIconToggle from "assets/Icons/BarsIconToggle";
import MapIcon from "assets/Icons/MapIcon";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CardsContentTrips = ({ buttonActiveMap, activeMap }) => {
  const [currentPage_2, setCurrentPage_2] = useState(0);
  const perPage = 2; // NUMBER OF PAGE ITEMS
  const pageCount = Math.ceil(cardsFavoriteData.length / perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage_2(selected);
  };

  const offset = currentPage_2 * perPage;
  const currentPageData = cardsFavoriteData.slice(offset, offset + perPage);

  // ADD TO WISHLIST
  const [wishList_2, setWishList_2] = useState([]);

  const addToWishList = (id) => {
    setWishList_2((prevList) => {
      if (prevList.includes(id)) {
        // CHECK IF CARD ITEM IS INCLUDE SAME ID
        return prevList.filter((item) => item !== id);
      } else {
        return [...prevList, id];
      }
    });
    // ADD TOAST SUCCESS IF TRUE AND ADD ERROR IF NOT TRUE
    if (!wishList_2.includes(id)) {
      toast.success("تم الاضافة الى المفضلة.");
    } else {
      toast.error("تم الأزالة من المفضلة.");
    }
  };

  return (
    <div className="cards-trips-content">
      <div className="header-top-trip-cards d-flex  justify-content-between  align-items-center  flex-wrap  gap-2 mb-3">
        <h2 className="title">النتائج {pageCount}</h2>
        <button
          onClick={buttonActiveMap}
          className="btn-main btn-new--1 d-flex  align-items-center  gap-2"
        >
          {!activeMap ? (
            <>
              {" "}
              <MapIcon />
              خريطة
            </>
          ) : (
            <>
              <BarsIconToggle /> عرض قائمة
            </>
          )}
        </button>
      </div>
      <div className="main-cards-offers">
        {/* ============= START ROW =========== */}
        <div className="row g-3">
          {currentPageData.length > 0 ? (
            currentPageData.map((item) => {
              return (
                <>
                  {/* ========== START COL =========== */}
                  <div className="col-12 col-sm-6 col-xl-12" key={item.id}>
                    <Link to={`/tripsPage/${item.id}`}>
                      <CardFavorite
                        newClassCard={"card-offer-one"}
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
                        removeFromFavorites={false}
                        isFavoritePage={false}
                        isNewPage={true}
                        wishListCard={wishList_2}
                        addToWishList={addToWishList}
                      />
                    </Link>
                  </div>
                  {/* ========== END COL =========== */}
                </>
              );
            })
          ) : (
            <>
              <p className="text-section-api fs-6 fw-medium text-center pt-5">
                لا يوجد عروض جديدة.
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
        {/* ============ START PAGINATION ============= */}
        <PaginationPage itemCount={pageCount} onPageChange={handlePageChange} />
        {/* ============ END PAGINATION ============= */}
      </div>
    </div>
  );
};

export default CardsContentTrips;
