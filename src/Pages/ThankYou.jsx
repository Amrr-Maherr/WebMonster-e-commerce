import React from "react";
import { Link } from "react-router-dom"; // إذا كنت تستخدم React Router

const ThankYou = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // توسيط عمودي
    alignItems: "center", // توسيط أفقي
    textAlign: "center",
    minHeight: "100vh", // تأكد من أن الحاوية تملأ الشاشة
    padding: "50px",
    fontFamily: '"Open Sans", sans-serif', // استبدل بخط DeFacto الفعلي
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#343a40", // رمادي داكن
    marginBottom: "20px",
  };

  const messageStyle = {
    fontSize: "1.2rem",
    color: "#6c757d", // رمادي متوسط
    marginBottom: "30px",
  };

  const buttonStyle = {
    backgroundColor: "rgba(219, 68, 68, 1)", // أحمر DeFacto (نفس لون زر Checkout)
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "12px 25px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Thank You!</h1>
      <p style={messageStyle}>
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>
      <Link to="/" style={buttonStyle}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYou;
