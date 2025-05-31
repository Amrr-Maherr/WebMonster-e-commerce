import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";

function Favorites() {
  // جلب المنتجات من localStorage
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteItems(favs);
  }, []);

  const removeFromFavorites = (itemId) => {
    const updatedFavs = favoriteItems.filter((item) => item.id !== itemId);
    setFavoriteItems(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  const productCardStyle = {
    transition: "transform 0.2s ease-in-out",
  };

  const productCardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const removeFavoriteBtnStyle = {
    borderRadius: "25px",
    padding: "0.3rem 0.75rem",
  };

  const removeFavoriteBtnHoverStyle = {
    backgroundColor: "#f8f9fa",
  };

  return (
    <>
      <MainNav />
      <div className="container my-5">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom py-3">
            <h2 className="mb-0 text-muted">
              <i className="bi bi-heart me-2"></i>
              My Favorites
            </h2>
          </div>
          <div className="card-body">
            {favoriteItems.length === 0 ? (
              <div className="alert alert-light border" role="alert">
                <i className="bi bi-exclamation-circle me-2"></i>
                No items in your favorites list yet.
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {favoriteItems.map((item) => (
                  <div className="col" key={item.id}>
                    <div
                      className="card h-100"
                      style={productCardStyle}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform =
                          productCardHoverStyle.transform;
                        e.currentTarget.style.boxShadow =
                          productCardHoverStyle.boxShadow;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = null;
                        e.currentTarget.style.boxShadow = null;
                      }}
                    >
                      <img
                        src={item.photo || item.image}
                        className="card-img-top"
                        alt={item.name || item.title}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          {item.name || item.title}
                        </h5>
                        <p className="card-text text-muted">
                          {item.price ? `$${item.price}` : ""}
                        </p>
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
                          onClick={() => removeFromFavorites(item.id)}
                        >
                          <i className="bi bi-x-lg me-1"></i>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Favorites;
