import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Login_Img from "../../Assets/Side Image.png";
import Footer from "../../Component/Footer";
import MainNav from "../../Component/MainNav";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    // Simulate password reset (replace with actual API call in production)
    try {
      const userData = JSON.parse(localStorage.getItem("signup_data")) || {};
      userData.password = password; // Update password (insecure for production)
      localStorage.setItem("signup_data", JSON.stringify(userData));
      toast.success("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000); // Redirect to login
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
                  alt="Reset password illustration"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </motion.div>

            {/* Reset Password form with animation */}
            <motion.div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                className="reset-password-form"
                style={{ width: "371px", height: "326px" }}
                onSubmit={handleResetPassword}
              >
                <div
                  className="reset-password-title"
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
                    Reset Password
                  </h1>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                    }}
                  >
                    Enter your new password below
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
                    type="password"
                    className="w-100"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="New Password"
                  />
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
                    type="password"
                    className="w-100"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    aria-label="Confirm Password"
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
                    aria-label="Reset Password"
                  >
                    Reset Password
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
