import { useState } from "react";

import UserCommentRate from "./UserCommentRate";
import PaginationPage from "Components/Pagination/Pagination";
import { Link } from "react-router-dom";
import { dataUser } from "./DataCommentsRate";
const AllRatesComments = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 4; // NUMBER OF PAGE ITEMS
  const pageCount = Math.ceil(dataUser.length / perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * perPage;
  const currentPageData = dataUser.slice(offset, offset + perPage);
  return (
    <div className="all-rates-comment-data margin-top-1">
      <div className="row g-3">
        {currentPageData.length > 0 ? (
          currentPageData.map((item) => {
            return (
              <div className="col-12">
                <UserCommentRate
                  imageUser={item.userImage}
                  userName={item.userName}
                  timeAdd={item.timeAdd}
                  timeText={item.timeText}
                  comment={item.comment}
                />
              </div>
            );
          })
        ) : (
          <>
            <p className="text-section-api fs-6 fw-medium text-center pt-5">
              لا يوجد تعليفات جديدة.
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
      {/* ============ START PAGINATION ============= */}
      <PaginationPage itemCount={pageCount} onPageChange={handlePageChange} />
      {/* ============ END PAGINATION ============= */}
    </div>
  );
};

export default AllRatesComments;
