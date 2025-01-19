import CustomModal from "Components/CustomModal/CustomModal";
import img from "../../../assets/images/slider/01.png";
import "./ModalCart.css";
import CounterUpDown from "../CounterUpDown/CounterUpDown";
import { useState } from "react";
import TrashIcon from "assets/Icons/TrashIcon";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
const ModalCart = ({ showModalCart, hideModalCart }) => {
  //   COUNTER
  const [counterValue, setCounterValue] = useState(1);

  const handleCounterChange = (value) => {
    setCounterValue(value);
  };

  const [cartItems, setCartItems] = useState([
    { id: 1, img: img, name: "قطعة فنية", price: 53 },
    { id: 2, img: img, name: "قطعة فنية", price: 63 },
    { id: 3, img: img, name: "قطعة فنية", price: 63 },
    { id: 4, img: img, name: "قطعة فنية", price: 63 },
    { id: 5, img: img, name: "قطعة فنية", price: 63 },
    { id: 6, img: img, name: "قطعة فنية", price: 63 },
    { id: 7, img: img, name: "قطعة فنية", price: 63 },
    { id: 8, img: img, name: "قطعة فنية", price: 63 }
  ]);

  // Function to remove a product from the cart
  const removeProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success("تم الحذف بنجاح.");
  };

  // ROUTE TO PAGE CONFIRM PAY TO PAY PRODUCTS
  const navigatePage = useNavigate();

  const routePage = () => {
    navigatePage("/payConfirmPage");
    hideModalCart();
  };

  // IF NOT FOUND PRODUCTS ROUTE TO HOME PAGE
  const navigate = useNavigate();
  const routePageCart = () => {
    navigate("/");
    hideModalCart();
  };

  return (
    <CustomModal
      show={showModalCart}
      onHide={hideModalCart}
      title={"السلة"}
      newClass={"modal-cart-app modal-width-content"}
    >
      {/* ============== START ALL CARD CART =============== */}
      <div className="all-card-cart">
        <div className="cards-cart-content position-relative">
          {/* ============== START ROW ============= */}
          <div className="row g-3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return (
                  <>
                    {/* ==================== START COL =============== */}
                    <div className="col-12">
                      {/* ============== START CARD CART ONE ============ */}
                      <div className="card-cart-one d-flex gap-3  w-100">
                        {/* ============= START CONTENT CARD RIGHT ============ */}
                        <div className="content-card-right d-flex align-items-center gap-3">
                          {/* ============ START IMAGE PROUCT ============ */}
                          <div className="image-product">
                            <img src={item.img} alt="imgProuct" />
                          </div>
                          {/* ============ END IMAGE PROUCT ============ */}
                        </div>
                        <div className="w-100">
                          {/* ============= END CONTENT CARD RIGHT ============ */}
                          <div className="content-info d-flex justify-content-between align-items-center w-100">
                            <h2 className="title">{item.name}</h2>
                            <div className="price-product">
                              {item.price} ريال
                            </div>
                          </div>
                          {/* ============= START CONTENT CAR LEFT ============ */}
                          <div className=" w-100 content-card-left d-flex align-items-center gap-3 justify-content-between ">
                            <CounterUpDown
                              initialValue={counterValue}
                              minValue={1}
                              maxValue={15}
                              onChange={handleCounterChange}
                            />
                            <div
                              onClick={() => removeProduct(item.id)}
                              className="button-remove-product d-flex justify-content-center align-items-center cursor-pointer-event"
                            >
                              <TrashIcon />
                            </div>
                          </div>
                          {/* ============= END CONTENT CAR LEFT ============ */}
                        </div>
                      </div>
                      {/* ============== END CARD CART ONE ============ */}
                    </div>
                    {/* ==================== END COL =============== */}
                  </>
                );
              })
            ) : (
              <div className="not-found-products d-flex flex-column gap-3 align-items-center  justify-content-center">
                <p className="title text-center pt-3">
                  لا يوجد منتجات فى السلة
                </p>
                <button onClick={routePageCart} className="btn-main">
                  الصفحة الرئيسية
                </button>
              </div>
            )}
          </div>
          {/* ============== END ROW ============= */}
        </div>
        {cartItems.length > 0 ? (
          <div className="d-flex justify-content-end align-items-end pt-4">
            <button onClick={routePage} className="btn-main">
              إستكمال الطلب
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* ============== END ALL CARD CART =============== */}
    </CustomModal>
  );
};

export default ModalCart;
