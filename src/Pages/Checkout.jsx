import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import Swal from "sweetalert2";
import axios from "axios";

const Checkout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      Swal.fire("Error", "User not authenticated.", "error");
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await axios.get(
          `https://e-commerce-project-production-2e7f.up.railway.app/user/ShowCart/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const formattedProducts = res.data.map((item) => ({
          id: item.productId._id,
          name: item.productId.name,
          price: parseFloat(item.productId.price.replace("$", "")),
          quantity: item.quantity || 1,
          image: item.productId.photo,
          title: item.productId.title,
          discount: item.productId.discount,
          rate: item.productId.rate,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching cart:", error);
        Swal.fire("Error", "Failed to load cart data.", "error");
      }
    };

    fetchCart();
  }, []);

  const containerStyle = {
    fontFamily: '"Open Sans", sans-serif',
    backgroundColor: "#f8f9fa",
    padding: "20px",
    minHeight: "100vh",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    border: "1px solid #e9ecef",
  };

  const cardHeaderStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    borderBottom: "1px solid #e9ecef",
  };

  const cardTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#343a40",
    margin: 0,
  };

  const productListStyle = {
    padding: "15px",
  };

  const productItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: "15px",
  };

  const productImageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "15px",
  };

  const productInfoStyle = {
    flex: 1,
  };

  const productNameStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#212529",
    marginBottom: "5px",
  };

  const productQuantityStyle = {
    fontSize: "0.9rem",
    color: "#6c757d",
  };

  const productPriceStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#212529",
  };

  const orderSummaryStyle = {
    padding: "15px",
  };

  const summaryItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  };

  const totalLabelStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const totalValueStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
  };

  const checkoutButtonStyle = {
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "12px 20px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    display: "block",
    textAlign: "center",
    textDecoration: "none",
  };

  const iconStyle = {
    marginRight: "8px",
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shippingCost = 5.0;
  const discount = 2.0;
  const total = subtotal + shippingCost - discount;

  const confirmOrder = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      Swal.fire("Error", "User not authenticated.", "error");
      return;
    }

    try {
      await axios.put(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/verify/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire("Success", "Order confirmed successfully!", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  const cancelOrder = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      Swal.fire("Error", "User not authenticated.", "error");
      return;
    }

    try {
      await axios.put(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/cancel/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts([]);
      Swal.fire("Cancelled", "Order cancelled successfully.", "warning");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  return (
    <>
      <MainNav />
      <div style={containerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h5 style={cardTitleStyle}>Shopping Cart</h5>
                </div>
                <div style={productListStyle}>
                  {products.length > 0 ? (
                    products.map((product) => (
                      <div style={productItemStyle} key={product.id}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={productImageStyle}
                        />
                        <div style={productInfoStyle}>
                          <h6 style={productNameStyle}>{product.name}</h6>
                          <p style={productQuantityStyle}>
                            Quantity: {product.quantity}
                          </p>
                          <p style={productPriceStyle}>
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Your cart is empty.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h5 style={cardTitleStyle}>Order Summary</h5>
                </div>
                <div style={orderSummaryStyle}>
                  <div style={summaryItemStyle}>
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div style={summaryItemStyle}>
                    <span>Shipping:</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div style={summaryItemStyle}>
                    <span>Discount:</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div style={summaryItemStyle}>
                    <span style={totalLabelStyle}>Total:</span>
                    <span style={totalValueStyle}>${total.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={confirmOrder}
                    style={{
                      ...checkoutButtonStyle,
                      marginTop: "10px",
                      backgroundColor: "#28a745",
                    }}
                  >
                    <i className="fas fa-check-circle" style={iconStyle}></i>
                    Confirm Order
                  </button>

                  <button
                    onClick={cancelOrder}
                    style={{
                      ...checkoutButtonStyle,
                      marginTop: "10px",
                      backgroundColor: "#dc3545",
                    }}
                  >
                    <i className="fas fa-times-circle" style={iconStyle}></i>
                    Cancel Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
