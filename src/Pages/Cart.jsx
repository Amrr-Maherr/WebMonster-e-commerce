import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Cart() {
  const nav = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        toast.error("You must be logged in to view the cart.");
        return;
      }

      try {
        const res = await axios.get(
          `https://e-commerce-project-production-2e7f.up.railway.app/user/ShowCart/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataWithQuantities = res.data.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(dataWithQuantities);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        toast.error("Failed to load cart items.");
      }
    };

    fetchCartItems();
  }, []);

  const getPriceNumber = (price) => {
    if (!price) return 0;
    const num = parseFloat(price.toString().replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total +
          getPriceNumber(item.productId.price) * (parseInt(item.quantity) || 1),
        0
      )
      .toFixed(2);
  };

  // ✅ حذف منتج من السلة
  const handleDelete = async (productId) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      await axios.delete(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/deleteproduct/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { productId },
        }
      );

      setCartItems((prev) =>
        prev.filter((item) => item.productId._id !== productId)
      );
      toast.success("Product removed.");
    } catch (err) {
      toast.error("Failed to remove product.");
    }
  };

  // ✅ تعديل الكمية
  const updateQuantity = async (productId, newQuantity) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (newQuantity < 1) return;

    try {
      await axios.put(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/updateproduct/${userId}`,
        {
          productId,
          quantity: newQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item.productId._id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    } catch (err) {
      toast.error("Failed to update quantity.");
    }
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
                      <tr key={item._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.productId.photo}
                              alt={item.productId.name}
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                              }}
                              className="rounded me-3"
                            />
                            <div>
                              <h6 className="mb-1">{item.productId.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>${getPriceNumber(item.productId.price)}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                updateQuantity(
                                  item.productId._id,
                                  item.quantity - 1
                                )
                              }
                            >
                              –
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                updateQuantity(
                                  item.productId._id,
                                  item.quantity + 1
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          $
                          {(
                            getPriceNumber(item.productId.price) *
                            (parseInt(item.quantity) || 1)
                          ).toFixed(2)}
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(item.productId._id)}
                          >
                            Delete
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
              onClick={() => nav("/check-out")}
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
