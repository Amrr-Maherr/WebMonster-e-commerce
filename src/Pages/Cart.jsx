import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import { useNavigate } from "react-router-dom";

function Cart() {
  const nav = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // ✅ تحميل البيانات من localStorage عند أول تحميل
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const cartWithQuantities = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1, 
    }));
    setCartItems(cartWithQuantities);
  }, []);


  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const increaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    updateQuantity(itemId, item.quantity + 1);
  };

  const decreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const quantityBtnStyle = {
    padding: "0.2rem 0.5rem",
    fontSize: "0.8rem",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(219, 68, 68, 1)",
    color: "white",
    cursor: "pointer",
    lineHeight: 1,
  };

  const removeFavoriteBtnStyle = {
    borderRadius: "25px",
    padding: "0.3rem 0.75rem",
  };

  const removeFavoriteBtnHoverStyle = {
    backgroundColor: "#f8f9fa",
  };

  const checkoutButtonStyle = {
    backgroundColor: "rgba(219, 68, 68, 1)",
    color: "white",
    border: "none",
  };

  return (
    <>
      <MainNav />
      <div className="container my-5">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom py-3">
            <h2 className="mb-0 text-muted">
              <i className="bi bi-cart me-2"></i>
              My Cart
            </h2>
          </div>
          <div className="card-body">
            {cartItems.length === 0 ? (
              <div className="alert alert-light border" role="alert">
                <i className="bi bi-info-circle me-2"></i>
                Your cart is empty. Add some products!
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="text-muted">
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image || item.photo} // دعم الحقول القديمة والجديدة
                              alt={item.name}
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                              }}
                              className="rounded me-3"
                            />
                            <div>
                              <h6 className="mb-1">{item.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              style={quantityBtnStyle}
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              style={quantityBtnStyle}
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            style={removeFavoriteBtnStyle}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor =
                                removeFavoriteBtnHoverStyle.backgroundColor;
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = null;
                            }}
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="bi bi-trash me-1"></i>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="card-footer bg-light d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-muted">
              Total: <span className="text-dark">${calculateTotal()}</span>
            </h5>
            <button
              onClick={() => {
                nav("/check-out");
              }}
              className="btn"
              style={checkoutButtonStyle}
            >
              <i className="bi bi-check-circle me-2"></i>
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
