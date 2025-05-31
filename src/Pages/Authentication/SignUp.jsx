import { Link } from "react-router-dom";
import SignUp_Image from "../../Assets/Side Image.png";
import Footer from "../../Component/Footer";
import MainNav from "../../Component/MainNav";
import GoogleImg from "../../Assets/Icon-Google.png";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Save all data in one object in localStorage
    const userData = {
      name,
      emailOrPhone,
      password,
    };
    localStorage.setItem("signup_data", JSON.stringify(userData));
    // You can add a success message or redirect here if needed
  };

  return (
    <>
      <MainNav />
      <section style={{ margin: "50px 0px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 d-none d-sm-block my-4">
              <div className="singUp-image" style={{ height: "781px" }}>
                <img
                  src={SignUp_Image}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
            <motion.div
              className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                className="login-form"
                style={{ width: "371px", height: "auto" }}
                onSubmit={handleSignUp}
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
                    Create an account
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
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    type="email"
                    className="w-100"
                    placeholder="Email or Phone Number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
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
                  />
                </div>

                <div className="w-100 d-flex align-items-center justify-content-center flex-column">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    style={{
                      width: "371px",
                      height: "56px",
                      borderRadius: "4px",
                      backgroundColor: "#DB4444",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#FAFAFA",
                      border: "none",
                    }}
                    type="submit"
                  >
                    Create Account
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    style={{
                      width: "371px",
                      height: "56px",
                      borderRadius: "4px",
                      backgroundColor: "white",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                      border: "1px solid black",
                      marginTop: "16px",
                      marginBottom: "32px",
                    }}
                    type="button"
                  >
                    <img src={GoogleImg} alt="" className="me-3" />
                    Sign up with Google
                  </motion.button>
                  <Link
                    to="/login"
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Already have account? Login
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
