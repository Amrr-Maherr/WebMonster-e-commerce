import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import { toast, Toaster } from "react-hot-toast";

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

const iconAnimation = {
  whileHover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Save message to localStorage (for demo)
    const contactMessages =
      JSON.parse(localStorage.getItem("contact_messages")) || [];
    contactMessages.push({
      name,
      email,
      phone,
      message,
      date: new Date().toISOString(),
    });
    localStorage.setItem("contact_messages", JSON.stringify(contactMessages));
    toast.success("Message sent successfully!");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <Toaster position="top-center" />
      <MainNav />
      <motion.section
        style={{ margin: "50px 0px" }}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <div className="row">
            <motion.div className="col-xl-5" variants={slideInLeft}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "340px",
                  height: "457px",
                }}
              >
                <div
                  style={{
                    width: "270px",
                    height: "366px",
                  }}
                >
                  {/* الاتصال بنا */}
                  <div className="h-50">
                    <div
                      className="d-flex align-items-center gap-3"
                      style={{ marginBottom: "24px" }}
                    >
                      <motion.i
                        className="fas fa-phone text-white"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#DB4444",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                        aria-hidden="true"
                        variants={iconAnimation}
                        whileHover="whileHover"
                      />
                      <p className="p-0 m-0">Call To Us</p>
                    </div>
                    <div style={{ marginBottom: "32px" }}>
                      <p>We are available 24/7, 7 days a week.</p>
                      <p>Phone: +8801611112222</p>
                    </div>
                  </div>

                  <hr />

                  {/* البريد الإلكتروني */}
                  <div className="h-50">
                    <div
                      className="d-flex align-items-center gap-3"
                      style={{ marginBottom: "24px" }}
                    >
                      <motion.i
                        className="fas fa-envelope text-white"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#DB4444",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                        aria-hidden="true"
                        variants={iconAnimation}
                        whileHover="whileHover"
                      />
                      <p className="p-0 m-0">Email Us</p>
                    </div>
                    <div style={{ marginBottom: "32px" }}>
                      <p>Send us an email anytime.</p>
                      <p>Email: support@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-xl-7"
              style={{ padding: "30px 0px" }}
              variants={slideInRight}
            >
              <form
                className="contact-form  h-100 w-100 d-flex align-items-end justify-content-between flex-column"
                onSubmit={handleSend}
              >
                <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
                  <input
                    type="text"
                    className="my-2 px-2"
                    placeholder="Your Name *"
                    style={{
                      height: "50px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#F5F5F5",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="my-2 px-2"
                    placeholder="Your Email *"
                    style={{
                      height: "50px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#F5F5F5",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="my-2 px-2"
                    placeholder="Your Phone *"
                    style={{
                      height: "50px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#F5F5F5",
                    }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div style={{ width: "100%", height: "207px" }}>
                  <textarea
                    className="p-2"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#F5F5F5",
                      border: "none",
                    }}
                    placeholder="Your Massage"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    style={{
                      width: "215px",
                      height: "56px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#DB4444",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Send Massage
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
