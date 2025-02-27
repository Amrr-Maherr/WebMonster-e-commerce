import React from "react";
import { motion } from "framer-motion";
import About_img from "../Assets/OurStory-img.png";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import emOne from "../Assets/Frame 874.png";
import emTwo from "../Assets/Frame 875.png";
import emThree from "../Assets/Frame 876.png";

//-- Variants for animations --
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const boxAnimation = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

export default function About() {
  // Data for Stats Boxes
  const statsData = [
    {
      icon: "fas fa-users fa-2x",
      title: "50k+",
      description: "Active users worldwide",
    },
    {
      icon: "fas fa-store fa-2x",
      title: "15k+",
      description: "Verified sellers",
    },
    {
      icon: "fas fa-shopping-cart fa-2x",
      title: "100k+",
      description: "Successful transactions",
    },
    {
      icon: "fas fa-star fa-2x",
      title: "4.9/5",
      description: "Average customer rating",
    },
  ];

  // Data for Employees
  const employeesData = [
    { name: "Tom Cruise", title: "Founder & Chairman", image: emOne },
    { name: "Robert Downey Jr.", title: "CEO", image: emTwo },
    { name: "Scarlett Johansson", title: "Marketing Director", image: emThree },
  ];

  // Data for Services
  const servicesData = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: "fa-solid fa-headset",
      title: "24/7 CUSTOMER SUPPORT",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "MONEY-BACK GUARANTEE",
      description: "30-day money-back guarantee",
    },
  ];

  return (
    <>
      <MainNav />
      <motion.section
        style={{ margin: "50px 0px" }}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <div className="row">
            <motion.div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-3"
              variants={slideInLeft}
            >
              <div style={{ height: "336px", width: "525px" }}>
                <h1
                  style={{
                    fontSize: "54px",
                    fontWeight: "600",
                    marginBottom: "40px",
                  }}
                >
                  Our Story
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "24px",
                  }}
                >
                  Launched in 2015, Exclusive is South Asia’s premier online
                  shopping marketplace with an active presence in Bangladesh.
                  Supported by a wide range of tailored marketing, data, and
                  service solutions, Exclusive has 10,500 sellers and 300 brands
                  and serves 3 million customers across the region.{" "}
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assortment in
                  categories ranging from consumer.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-xl-6 col-12 my-3"
              variants={slideInRight}
            >
              <div style={{ height: "609px" }}>
                <img
                  src={About_img}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Boxes Section */}
          <div className="row" style={{ margin: "140px 0px" }}>
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="col-xl-3 col-lg-4 col-md-6 col-12 my-2"
                variants={fadeIn}
              >
                <motion.div
                  className="box d-flex align-items-center justify-content-center flex-column text-center mx-auto"
                  style={{
                    width: "270px",
                    height: "230px",
                    border: "1px solid #0000004D",
                    borderRadius: "4px",
                  }}
                  variants={boxAnimation}
                  whileHover="whileHover"
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      margin: "30px 50px",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#000000",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <i className={stat.icon}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "32px", fontWeight: "700" }}>
                      {stat.title}
                    </h4>
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Employees Section */}
          <div
            className="row"
            style={{ marginTop: "140px", marginBottom: "196px" }}
          >
            {employeesData.map((employee, index) => (
              <motion.div
                key={index}
                className="col-xl-4 col-md-6 col-12"
                variants={fadeIn}
              >
                <div
                  style={{
                    width: "370px",
                    height: "auto",
                    margin: "0px auto",
                  }}
                >
                  <img src={employee.image} alt={employee.name} />
                  <div>
                    <h4
                      style={{
                        fontSize: "32px",
                        fontWeight: "500",
                        marginTop: "32px",
                        marginBottom: "8px",
                      }}
                    >
                      {employee.name}
                    </h4>
                    <p>{employee.title}</p>
                    <div style={{ marginTop: "16px" }}>
                      <i
                        className="fa-brands fa-facebook-f"
                        style={{ margin: "0 10px", fontSize: "20px" }}
                      ></i>
                      <i
                        className="fa-brands fa-twitter"
                        style={{ margin: "0 10px", fontSize: "20px" }}
                      ></i>
                      <i
                        className="fa-brands fa-linkedin-in"
                        style={{ margin: "0 10px", fontSize: "20px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <div className="row" style={{ marginBottom: "140px" }}>
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="col-xl-4 col-md-6 col-12"
                variants={fadeIn}
              >
                <div
                  style={{
                    width: "auto",
                    margin: "0px auto",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <i
                    className={service.icon}
                    style={{ fontSize: "32px", marginBottom: "10px" }}
                  ></i>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
