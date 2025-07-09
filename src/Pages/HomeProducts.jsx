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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://e-commerce-project-production-2e7f.up.railway.app/user/allproduct"
        );
        setProducts(response.data.slice(0, productCount));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
        toast.error("Error fetching products");
      }
    };
    fetchProducts();
  }, [productCount]);

  const navButtonVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(230, 230, 230, 1)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.9 },
  };

  const handleAddToCart = async (item) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      toast.error("You must be logged in to add products to the cart.");
      return;
    }

    try {
      await axios.post(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/addtocart/${userId}`,
        {
          productId: item._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
      toast.error(
        error.response?.data?.message || "Failed to add product to cart."
      );
    }
  };
  
  

  // ✅ المفضلة (ما زالت localStorage)
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

                          <Link
                            to={`/product/${product.id}`}
                            title="View product"
                            aria-label="View product"
                            style={{
                              color: "inherit",
                              display: "flex",
                              alignItems: "flex-start",
                              textDecoration: "none",
                            }}
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
