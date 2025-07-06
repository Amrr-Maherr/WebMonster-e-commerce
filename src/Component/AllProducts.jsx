import axios from "axios";
import { useEffect, useState } from "react";
import Ad from "./Ad";
import Footer from "./Footer";
import SubNav from "./SubNav";
import MainNav from "./MainNav";
import { toast, Toaster } from "react-hot-toast";
import VideoBackgroundSection from "./VideoBackgroundSection";
import { Link } from "react-router-dom"; // ✅ إضافة Link

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://e-commerce-project-production-2e7f.up.railway.app/user/allproduct"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
        toast.error("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

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

  const filteredProducts =
    products && products.length > 0
      ? products.filter(
          (product) =>
            product.title?.toLowerCase().includes(search.toLowerCase()) ||
            product.name?.toLowerCase().includes(search.toLowerCase()) ||
            product.category?.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const cardStyle = {
    width: "18rem",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    border: "none",
    margin: "auto",
    minHeight: "460px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <>
      <Toaster position="top-center" />
      <MainNav />
      <VideoBackgroundSection
        title="Taste the Freshness"
        text="Discover high-quality organic and gourmet foods delivered straight to your doorstep. Eat healthy, live better."
        videoSrc="https://videocdn.cdnpk.net/videos/ef621f86-8584-4aa0-b5db-e07a56d0fe23/horizontal/previews/clear/small.mp4?token=exp=1751839420~hmac=3ca5e4a38026d7ac93eae1a6e612d76d30116c2facb45835b9ef6ee4919aff33"
      />

      <section className="container-fluid my-5">
        <div className="row mb-4">
          <div className="col-12 col-md-6 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for products by name, title, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search for products"
            />
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
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="col-md-3 col-sm-6 col-12 mb-4 d-flex"
                key={product.id}
              >
                <div style={cardStyle} className="card h-100">
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

                      {/* ✅ رابط تفاصيل المنتج داخل أيقونة العين */}
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
                    className="card-img-top"
                    alt={product.title || "Product Image"}
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
                      className="btn btn-primary w-100 mt-2"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No products found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
