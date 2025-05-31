import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import SubNav from "../Component/SubNav";
import "../Style/MainNav.css";
import { useEffect, useState } from "react";

export default function MainNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("signup_data");
    setIsLoggedIn(!!user);

    // Get cart count from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);

    // Listen for cart changes in other tabs/windows
    const handleStorage = (e) => {
      if (e.key === "cart") {
        const updatedCart = JSON.parse(e.newValue) || [];
        setCartCount(updatedCart.length);
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("signup_data");
    setIsLoggedIn(false);
    nav("/login");
  };

  return (
    <>
      <SubNav />
      <motion.nav
        className="navbar navbar-expand-lg border-bottom py-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-fluid">
          <p className="navbar-brand">Box&Buy</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav-two d-flex align-items-center gap-3">
              <ul className="list-unstyled d-flex gap-3 m-0">
                <li className="nav-item">
                  <Link to="/favorite" className="text-danger">
                    <i className="fas fa-heart"></i>
                  </Link>
                </li>
                <li className="nav-item position-relative">
                  <Link to="/cart" style={{ color: "black" }}>
                    <i className="fas fa-shopping-cart"></i>
                    {cartCount > 0 && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-8px",
                          right: "-10px",
                          background: "#DB4444",
                          color: "#fff",
                          borderRadius: "50%",
                          fontSize: "12px",
                          width: "20px",
                          height: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </li>
                <li
                  className="nav-item d-flex align-items-center justify-content-center"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#DB4444",
                    borderRadius: "50%",
                  }}
                >
                  <Link to="/profile" style={{ color: "white" }}>
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
                {isLoggedIn && (
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
