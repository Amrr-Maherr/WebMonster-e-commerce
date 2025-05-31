import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import fetchData from "../Redux/ActionCreator";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function HomeProducts() {
  const nav = useNavigate();
  const products = useSelector((state) => state.ShopReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const navButtonStyle = {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(245, 245, 245, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    color: "#555",
    cursor: "pointer",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  };

  const navButtonVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(230, 230, 230, 1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  // Add To Cart function with react-hot-toast
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.some((p) => p.id === item.id);
    if (isAlreadyInCart) {
      toast.error("This product is already in the cart");
      return;
    }
    const updatedCart = [...existingCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product added to cart");
  };

  return (
    <section>
      <Toaster position="top-center" />
      <div className="container my-5">
        {/* Section Title */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex align-items-center gap-4">
              <div
                style={{
                  width: "20px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(219, 68, 68, 1)",
                }}
              ></div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "rgba(219, 68, 68, 1)",
                }}
                className="p-0 m-0"
              >
                Today’s
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-6">
            <h4 style={{ fontSize: "36px", fontWeight: "600" }}>Flash Sales</h4>
          </div>
        </div>

        <div className="row">
          <Marquee speed={40} pauseOnHover={true}>
            {products.map((product) => {
              const extractImageId = (url) => {
                const match = url.match(/\/d\/(.*?)\//);
                return match ? match[1] : "";
              };

              return (
                <div key={product.id} className="mx-3">
                  <div className="card relative" style={{ width: "18rem" }}>
                    <div className="absolute top-0 left-0 p-2 d-flex justify-content-between w-100">
                      <div className="bg-danger p-1 rounded text-white">
                        Offer {product.discount}
                      </div>
                      <div className="d-flex gap-2">
                        <i className="far fa-heart"></i>
                        <i className="far fa-eye"></i>
                      </div>
                    </div>

                    <img
                      src={product.photo}
                      alt={product.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text mb-1">{product.name}</p>
                      <p className="card-text mb-1">
                        <strong>Price:</strong> {product.price}
                      </p>
                      <p className="card-text mb-1">
                        <strong>Discount:</strong> {product.discount}
                      </p>
                      <p className="card-text mb-1">
                        <strong>Rate:</strong> {product.rate} ⭐
                      </p>
                      <button
                        onClick={() => handleAddToCart(product)}
                        style={{
                          width: "100%",
                          height: "41px",
                          backgroundColor: "rgba(0, 0, 0, 1)",
                        }}
                        className="btn btn-primary w-100"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <button
              onClick={() => {
                nav("/all-products");
              }}
              style={{
                width: "234px",
                height: "56px",
                borderRadius: "4px",
                backgroundColor: "rgba(219, 68, 68, 1)",
                border: "none",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",
              }}
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
