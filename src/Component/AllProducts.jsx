import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../Redux/ActionCreator";
import Ad from "./Ad";
import imgTwo from "../Assets/pexels-townsend-walton-6231368-29693465.jpg";
import Footer from "./Footer";
import SubNav from "./SubNav";
import MainNav from "./MainNav";
import { toast, Toaster } from "react-hot-toast";

export default function AllProducts() {
  const products = useSelector((state) => state.ShopReducer);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Add to cart function (localStorage) with react-hot-toast and login check
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

  // Filter products by search
  const filteredProducts =
    products && products.length > 0
      ? products.filter(
          (product) =>
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  // Card style (same as HomeProducts)
  const cardStyle = {
    width: "18rem",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    border: "none",
    margin: "auto",
    minHeight: "420px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <>
      <Toaster position="top-center" />
      <MainNav />
      <Ad
        image={imgTwo}
        title="Exclusive Organic Range"
        text="Try our premium organic food selection for a healthier lifestyle. Limited time offers available!"
        buttonLabel="Shop Organic"
      />
      <section className="container my-5">
        <div className="row mb-4">
          <div className="col-12 col-md-6 mx-auto">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div
                className="col-md-4 col-sm-6 col-12 mb-4 d-flex"
                key={product.id || idx}
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
                      ></i>
                      <i className="far fa-eye"></i>
                    </div>
                  </div>
                  <img
                    src={product.photo}
                    className="card-img-top"
                    alt={product.title}
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
