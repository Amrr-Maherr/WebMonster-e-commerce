import React from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";

export default function ProductDetails() {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  const containerStyle = {
    marginTop: "5rem",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const detailsStyle = {
    paddingTop: "2rem",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#343a40",
  };

  const descriptionStyle = {
    color: "#6c757d",
    marginBottom: "1.5rem",
  };

  const priceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: "1rem",
  };

  const ratingStyle = {
    color: "#ffc107",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    borderRadius: "25px",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginRight: "1rem", // Add some right margin
  };

  const favoriteButtonStyle = {
    borderRadius: "25px",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  return (
    <>
      <MainNav />
      <section>
        <div className="container my-5" style={containerStyle}>
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                style={imageStyle}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6" style={detailsStyle}>
              <h1 style={titleStyle}>{product.title}</h1>
              <p style={descriptionStyle}>{product.description}</p>
              <p style={priceStyle}>${product.price}</p>
              <div style={ratingStyle}>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <i
                      key={index}
                      className={`bi bi-star${
                        ratingValue <= product.rating.rate ? "-fill" : ""
                      }`}
                    ></i>
                  );
                })}
                <span className="ms-2 text-muted">
                  ({product.rating.count} Reviews)
                </span>
              </div>
              <button className="btn btn-outline-primary" style={buttonStyle}>
                <i className="bi bi-cart-plus me-2"></i>
                Add to Cart
              </button>
              <button
                className="btn btn-outline-secondary"
                style={favoriteButtonStyle}
              >
                <i className="bi bi-heart me-2"></i>
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
