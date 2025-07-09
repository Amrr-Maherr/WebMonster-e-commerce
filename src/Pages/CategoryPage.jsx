import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import VideoBackgroundSection from "../Component/VideoBackgroundSection";

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/category/${category}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load category products.");
        setLoading(false);
      });
  }, [category]);

  const handleAddToCart = async (item) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      toast.error("You must be logged in to add to cart.");
      return;
    }

    try {
      await axios.post(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/addtocart/${userId}`,
        { productId: item._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product added to cart");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product to cart.");
    }
  };

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

  const filteredProducts = products.filter(
    (product) =>
      product.title?.toLowerCase().includes(search.toLowerCase()) ||
      product.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="container py-5 text-center fw-bold">Loading...</div>;
  }

  return (
    <>
      <MainNav />
      <VideoBackgroundSection
        title="Taste the Freshness"
        text="Discover high-quality organic and gourmet foods delivered straight to your doorstep. Eat healthy, live better."
        videoSrc="https://videocdn.cdnpk.net/videos/ef621f86-8584-4aa0-b5db-e07a56d0fe23/horizontal/previews/clear/small.mp4?token=exp=1751839420~hmac=3ca5e4a38026d7ac93eae1a6e612d76d30116c2facb45835b9ef6ee4919aff33"
      />

      <section>
        <Toaster position="top-center" />
        <div className="container my-5">
          <h2 className="mb-4 fw-bold text-capitalize">{category} Products</h2>

          {/* ✅ Search Input */}
          <div className="row mb-4">
            <div className="col-12 col-md-6 mx-auto">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search in this category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-muted">No products found in this category.</p>
          ) : (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product._id} className="col-md-4 col-lg-3">
                  <div
                    className="card relative"
                    style={{
                      width: "100%",
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
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
