import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Login_Img from "../../Assets/Side Image.png";
import Footer from "../../Component/Footer";
import MainNav from "../../Component/MainNav";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ التحقق من الحقول
    if (!emailOrPhone.trim()) {
      toast.error("Please enter your email or phone number.");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await fetch(
        "https://e-commerce-project-production-2e7f.up.railway.app/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailOrPhone,
            password: password,
          }),
        }
      );

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      if (response.ok) {
        toast.success("Login successful!");

        if (typeof data === "object" && data.token) {
          localStorage.setItem("token", data.token);
        }

        navigate("/");
      } else {
        toast.error(data?.message || data || "Login failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Login error:", error);
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
                  alt="Login page illustration"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </motion.div>

            {/* Login form with animation */}
            <motion.div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                className="login-form"
                style={{ width: "371px", height: "326px" }}
                onSubmit={handleLogin}
              >
                <div className="login-title" style={{ marginBottom: "48px" }}>
                  <h1
                    style={{
                      fontSize: "36px",
                      fontWeight: "500",
                      color: "black",
                      marginBottom: "24px",
                    }}
                  >
                    Log in to Exclusive
                  </h1>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                    }}
                  >
                    Enter your details below
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
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
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
                    aria-label="Log In"
                  >
                    Log In
                  </motion.button>
                  <Link
                    to="/forget-password"
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#DB4444",
                      textDecoration: "none",
                    }}
                    aria-label="Forgot Password"
                  >
                    Forget password
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
