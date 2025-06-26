import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Login_Img from "../../Assets/Side Image.png";
import Footer from "../../Component/Footer";
import MainNav from "../../Component/MainNav";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleForgetPassword = (e) => {
    e.preventDefault();
    if (!emailOrPhone) {
      toast.error("Please enter your email or phone number.");
      return;
    }
    // Simulate sending reset link (replace with actual API call in production)
    try {
      const userData = JSON.parse(localStorage.getItem("signup_data")) || {};
      if (userData.emailOrPhone === emailOrPhone) {
        toast.success("Reset link sent! Check your email or phone.");
        setTimeout(() => navigate("/reset-password"), 2000); // Simulate redirect
      } else {
        toast.error("Email or phone not found.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <MainNav />
      <section style={{ margin: "50px 0px" }}>
        <div className="container">
          <div className="row">
            {/* Side image with animation */}
            <motion.div
              className="col-xl-6 col-12 d-none d-sm-block my-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="login-img" style={{ height: "781px" }}>
                <img
                  src={Login_Img}
                  alt="Forgot password illustration"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </motion.div>

            {/* Forget Password form with animation */}
            <motion.div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                className="forget-password-form"
                style={{ width: "371px", height: "326px" }}
                onSubmit={handleForgetPassword}
              >
                <div
                  className="forget-password-title"
                  style={{ marginBottom: "48px" }}
                >
                  <h1
                    style={{
                      fontSize: "36px",
                      fontWeight: "500",
                      color: "black",
                      marginBottom: "24px",
                    }}
                  >
                    Forgot Password
                  </h1>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                    }}
                  >
                    Enter your email or phone number to reset your password
                  </p>
                </div>

                <div>
                  <input
                    style={{
                      border: "none",
                      borderBottom: "1px solid black",
                      outline: "none",
                      padding: "10px 0px",
                      marginBottom: "40px",
                    }}
                    type="text"
                    className="w-100"
                    placeholder="Email or Phone Number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    aria-label="Email or Phone Number"
                  />
                </div>

                <div className="w-100 d-flex align-items-center justify-content-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    style={{
                      width: "143px",
                      height: "56px",
                      borderRadius: "4px",
                      backgroundColor: "#DB4444",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#FAFAFA",
                      border: "none",
                    }}
                    type="submit"
                    aria-label="Send Reset Link"
                  >
                    Send Reset Link
                  </motion.button>
                  <Link
                    to="/login"
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#DB4444",
                      textDecoration: "none",
                    }}
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
