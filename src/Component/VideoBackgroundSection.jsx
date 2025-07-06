import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function VideoBackgroundSection({
  title = "Discover Our Collection",
  text = "Explore our premium products for a unique shopping experience.",
  buttonLabel = "Shop Now",
  videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4",
}) {
  const navigate = useNavigate();

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="position-relative w-100 min-vh-100 overflow-hidden">
      {/* Background Video */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }}
      ></div>

      {/* Content */}
      <div
        className="position-relative d-flex flex-column justify-content-center align-items-center text-white text-center px-3 min-vh-100"
        style={{ zIndex: 2 }}
      >
        <motion.h1
          className="display-4 fw-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {text}
        </motion.p>
        <motion.button
          className="btn btn-danger px-4 py-2"
          onClick={() => navigate("/all-products")}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label={buttonLabel}
        >
          {buttonLabel}
        </motion.button>
      </div>
    </section>
  );
}
