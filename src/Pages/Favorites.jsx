import React, { useState } from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";

function Favorites() {
  const [favoriteItems, setFavoriteItems] = useState([
    {
      id: 3,
      name: "Minimalist Backpack",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1571404854147-9aa059a15867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2twYWNrJTIwbW9kZXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Geometric Planter",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1587541469791-7f02049241fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50ZXIlMjBtb2Rlcm58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const removeFromFavorites = (itemId) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== itemId));
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
    <MainNav/>
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
                        src={item.image}
                        className="card-img-top"
                        alt={item.name}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{item.name}</h5>
                        <p className="card-text text-muted">${item.price}</p>
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
      <Footer/>
    </>
  );
}

export default Favorites;
