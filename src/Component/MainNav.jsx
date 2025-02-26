import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SubNav from "../Component/SubNav"
import "../Style/MainNav.css";

export default function MainNav() {
  return (
    <>
      <SubNav/>
      <motion.nav
        className="navbar navbar-expand-lg border-bottom py-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-fluid">
          <p className="navbar-brand">Exclusive</p>
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
              <li className="nav-item">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                />
              </li>
              <ul className="list-unstyled d-flex gap-3 m-0">
                <li className="nav-item">
                  <i className="fas fa-heart"></i>
                </li>
                <li className="nav-item">
                  <i className="fas fa-shopping-cart"></i>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
