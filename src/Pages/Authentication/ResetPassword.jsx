import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Login_Img from "../../Assets/Side Image.png";
import Footer from "../../Component/Footer";
import MainNav from "../../Component/MainNav";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email || !code || !newPassword || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    const payload = {
      email,
      code,
      newPassword,
      confirmPassword,
    };

    const toastId = toast.loading("Resetting password...");

    try {
      const response = await fetch(
        "https://e-commerce-project-production-2e7f.up.railway.app/user/resetPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      toast.dismiss(toastId);

      if (response.ok) {
        toast.success(data.message || "Password reset successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <MainNav />
      <section style={{ margin: "50px 0px" }}>
        <div className="container">
          <div className="row">
            {/* Side image */}
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

            {/* Reset form */}
            <motion.div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                className="reset-password-form"
                style={{ width: "371px", height: "auto" }}
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
                    Enter the code sent to your email and set a new password
                  </p>
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: "1px solid black",
                    outline: "none",
                    padding: "10px 0px",
                    marginBottom: "30px",
                  }}
                />

                <input
                  type="text"
                  placeholder="Verification Code"
                  className="w-100"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: "1px solid black",
                    outline: "none",
                    padding: "10px 0px",
                    marginBottom: "30px",
                  }}
                />

                <input
                  type="password"
                  placeholder="New Password"
                  className="w-100"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: "1px solid black",
                    outline: "none",
                    padding: "10px 0px",
                    marginBottom: "30px",
                  }}
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-100"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: "1px solid black",
                    outline: "none",
                    padding: "10px 0px",
                    marginBottom: "40px",
                  }}
                />

                <div className="w-100 d-flex align-items-center justify-content-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    type="submit"
                    style={{
                      width: "160px",
                      height: "56px",
                      borderRadius: "4px",
                      backgroundColor: "#DB4444",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#FAFAFA",
                      border: "none",
                    }}
                  >
                    Reset Password
                  </motion.button>
                  <Link
                    to="/"
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
