import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import fetchData from "../Redux/ActionCreator";

export default function HomeProducts() {
  const products = useSelector((state) => state.ShopReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(products);

  const navButtonStyle = {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(245, 245, 245, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    color: "#555",
    cursor: "pointer",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  };

  const navButtonVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(230, 230, 230, 1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <>
      <section>
        <div className="container my-5">
          {/* عنوان القسم */}
          <div className="row" style={{ marginBottom: "20px" }}>
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
          <div className="row" style={{ marginBottom: "60px" }}>
            <div className="col-6">
              <h4 style={{ fontSize: "36px", fontWeight: "600" }}>
                Flash Sales
              </h4>
            </div>
            <div className="col-6  d-flex gap-3 justify-content-end">
              <motion.button
                style={navButtonStyle}
                variants={navButtonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-chevron-right"></i> {/* أيقونة لليمين */}
              </motion.button>
              <motion.button
                style={navButtonStyle}
                variants={navButtonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-chevron-left"></i>
              </motion.button>
            </div>
          </div>
          <div className="row">
            <Marquee speed={40} pauseOnHover={true}>
              {products.map((product) => (
                <div key={product.id} className="mx-3">
                  <div className="card relative" style={{ width: "18rem" }}>
                    <div className="absolute top-0 left-0 p-2 d-flex justify-content-between w-100">
                      <div className="bg-danger p-1 rounded text-white">
                        Offer 50%
                      </div>
                      <div className="d-flex gap-2">
                        <i className="far fa-heart"></i>
                        <i className="far fa-eye"></i>
                      </div>
                    </div>

                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.title.slice(0, 20)}
                      </h5>
                      <p className="card-text">
                        {product.description.substring(0, 15)}...
                      </p>
                      <button
                        style={{
                          width: "100%",
                          height: "41px",
                          backgroundColor: "rgba(0, 0, 0, 1)",
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
          </div>
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-12 text-center">
              <button
                style={{
                  width: "234px",
                  height: "56px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(219, 68, 68, 1)",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  color:"white"
                }}
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
