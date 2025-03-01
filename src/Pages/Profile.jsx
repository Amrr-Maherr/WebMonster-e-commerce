import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import { motion } from "framer-motion";

export default function Profile() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <MainNav />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12" style={{ margin: "80px 0px" }}>
              <p className="text-end">Welcome! Md Rimel</p>
            </div>
            <div className="row" style={{ marginBottom: "140px" }}>
              <div className="col-xl-3 col-12">
                <ul className="list-group border-0">
                  <li
                    className="list-group-item border-0"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    Manage My Account
                  </li>
                  <li
                    className="list-group-item border-0 ps-5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    My Profile
                  </li>
                  <li
                    className="list-group-item border-0 ps-5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Address Book
                  </li>
                  <li
                    className="list-group-item border-0 ps-5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    My Payment Options
                  </li>
                  <li
                    className="list-group-item border-0"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    My Orders
                  </li>
                  <li
                    className="list-group-item border-0 ps-5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    My Returns
                  </li>
                  <li
                    className="list-group-item border-0 ps-5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    My Cancellations
                  </li>
                  <li
                    className="list-group-item border-0"
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    My WishList
                  </li>
                </ul>
              </div>
              <div className="col-xl-9 col-12">
                <motion.div
                  className="form w-100 d-flex align-items-start justify-content-between flex-column"
                  style={{
                    height: "auto",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)",
                    padding: "40px 80px",
                  }}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="title" style={{ marginBottom: "16px" }}>
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "rgba(219, 68, 68, 1)",
                      }}
                    >
                      Edit Your Profile
                    </h2>
                  </div>

                  <div
                    className="row"
                    style={{ width: "100%", marginBottom: "16px" }}
                  >
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          style={{ marginBottom: "8px" }}
                        >
                          First Name:
                        </label>
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            height: "50px",
                          }}
                          type="text"
                          id="firstName"
                          className="form-control"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label
                          htmlFor="lastName"
                          style={{ marginBottom: "8px" }}
                        >
                          Last Name:
                        </label>
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            height: "50px",
                          }}
                          type="text"
                          id="lastName"
                          className="form-control"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ width: "100%", marginBottom: "16px" }}
                  >
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="email" style={{ marginBottom: "8px" }}>
                          Email
                        </label>
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            height: "50px",
                          }}
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label
                          htmlFor="address"
                          style={{ marginBottom: "8px" }}
                        >
                          Address
                        </label>
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            height: "50px",
                          }}
                          type="text"
                          id="address"
                          className="form-control"
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ width: "100%", marginBottom: "16px" }}
                  >
                    <div className="col-12">
                      <div className="form-group">
                        <label
                          htmlFor="password"
                          style={{ marginBottom: "8px" }}
                        >
                          Password Changes
                        </label>
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            marginBottom: "16px",
                            height: "50px",
                          }}
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter new password"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            marginBottom: "16px",
                            height: "50px",
                          }}
                          type="password"
                          id="confirmPassword"
                          className="form-control"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          style={{
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            marginBottom: "16px",
                            height: "50px",
                          }}
                          type="password"
                          id="oldPassword"
                          className="form-control"
                          placeholder="Enter current password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="col-12">
                      <div className="d-flex text-end justify-content-end gap-3 align-items-center">
                        <p className="p-0 m-0">Cancel</p>
                        <motion.button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.8}}
                          style={{
                            width: "214px",
                            height: "56px",
                            borderRadius: "4px",
                            border: "none",
                            backgroundColor: "rgba(219, 68, 68, 1)",
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          Save Changes
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
