import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile_data"));
    if (profile) {
      setName(profile.name || "");
      setEmail(profile.email || "");
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    if (newPassword || confirmPassword) {
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      if (newPassword.length < 6) {
        toast.error("Password must be at least 6 characters.");
        return;
      }
    }

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      toast.error("User not authenticated.");
      return;
    }

    const payload = {
      Name: name,
      email,
      currentPassword,
      newPassword,
      confirmPassword,
    };

    try {
      const res = await fetch(
        `https://e-commerce-project-production-2e7f.up.railway.app/user/updateprofile/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to update profile.");

      toast.success("Profile updated successfully!");

      const profileData = {
        name,
        email,
      };
      localStorage.setItem("profile_data", JSON.stringify(profileData));
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <MainNav />
      <section>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <motion.form
            className="form w-100 w-md-75 w-lg-50"
            style={{
              borderRadius: "4px",
              backgroundColor: "#fff",
              boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.05)",
              padding: "40px",
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSave}
          >
            <div className="title mb-4">
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

            <div className="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="currentPassword">Current Password:</label>
              <input
                type="password"
                id="currentPassword"
                className="form-control"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="confirmPassword">Confirm New Password:</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end gap-3">
              <p className="m-0">Cancel</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                style={{
                  width: "180px",
                  height: "50px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "rgba(219, 68, 68, 1)",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Save Changes
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </>
  );
}
