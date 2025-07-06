import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

export default function HomeProducts({
  sectionTitle = "Flash Sales",
  productCount = 10,
}) {
  const nav = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the endpoint
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://e-commerce-project-production-2e7f.up.railway.app/user/allproduct"
        );
        setProducts(response.data.slice(0, productCount)); // Limit to productCount
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
        toast.error("Error fetching products");
      }
    };
    fetchProducts();
  }, [productCount]);

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

  // Add To Cart function with react-hot-toast and login check
  const handleAddToCart = (item) => {
    const userData = JSON.parse(localStorage.getItem("signup_data"));
    if (!userData) {
      toast.error("You must be logged in to add products to the cart.");
      return;
    }
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

  // Add to favorites function (localStorage)
  const handleAddToFavorites = (item) => {
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFav = existingFavs.some((p) => p.id === item.id);
    if (isAlreadyFav) {
      toast.error("This product is already in favorites");
      return;
    }
    const updatedFavs = [...existingFavs, item];
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    toast.success("Product added to favorites");
  };

  return (
    <>
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
                  className="全世界
                p-0 m-0"
                >
                  Today’s
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-6">
              <h4 style={{ fontSize: "36px", fontWeight: "600" }}>
                {sectionTitle}
              </h4>
            </div>
          </div>

          <div className="row">
            {loading ? (
              <div className="col-12 text-center">
                <p>Loading products...</p>
              </div>
            ) : error ? (
              <div className="col-12 text-center">
                <p className="text-danger">{error}</p>
              </div>
            ) : products.length > 0 ? (
              <Marquee speed={40} pauseOnHover={true}>
                {products.map((product) => (
                  <div key={product.id} className="mx-3">
                    <div
                      className="card relative"
                      style={{
                        width: "18rem",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                        border: "none",
                        minHeight: "420px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="position-absolute top-0 start-0 p-2 d-flex justify-content-between w-100">
                        <div
                          className="bg-danger p-1 rounded text-white"
                          style={{ fontSize: "0.95rem" }}
                        >
                          Offer {product.discount}
                        </div>

                        <div className="d-flex gap-2">
                          <i
                            className="far fa-heart"
                            style={{ cursor: "pointer", color: "#DB4444" }}
                            onClick={() => handleAddToFavorites(product)}
                            title="Add to Favorites"
                            aria-label="Add to favorites"
                          ></i>

                          {/* ✅ الأيقونة فقط داخل <Link> */}
                          <Link
                            to={`/product/${product.id}`} // تأكد إنك تستخدم `_id` وليس `id`
                            title="View product"
                            aria-label="View product"
                            style={{ color: "inherit",display:"flex",alignItems:"flex-start",textDecoration:"none" }}
                          >
                            <i
                              className="far fa-eye"
                              style={{ cursor: "pointer", color: "#000" }}
                            ></i>
                          </Link>
                        </div>
                      </div>

                      <img
                        src={product.photo}
                        alt={product.title || "Product Image"}
                        className="card-img-top"
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px 8px 0 0",
                        }}
                      />

                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text mb-1">{product.name}</p>
                        <p className="card-text mb-1">
                          <strong>Category:</strong> {product.category}
                        </p>
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
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            marginTop: "auto",
                            fontWeight: "500",
                          }}
                          className="btn btn-primary w-100"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            ) : (
              <div className="col-12 text-center">
                <p>No products available.</p>
              </div>
            )}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <motion.button
                onClick={() => nav("/all-products")}
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
                whileHover="hover"
                whileTap="tap"
                variants={navButtonVariants}
              >
                View All Products
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
