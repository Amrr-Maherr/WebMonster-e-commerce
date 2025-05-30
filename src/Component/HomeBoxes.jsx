import React from "react";

export default function HomeBoxes() {
  const outerCircle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2F2E30 60%, #444 100%)",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
  };

  const innerCircle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #000 60%, #444 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  };

  const boxStyle = {
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    padding: "32px 18px 24px 18px",
    margin: "18px 0",
    minHeight: "320px",
    transition: "transform 0.2s",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const titleStyle = {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "21px",
    lineHeight: "30px",
    marginBottom: "8px",
    color: "#2F2E30",
    letterSpacing: "0.5px",
  };

  const descStyle = {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "22px",
    color: "#555",
    margin: 0,
  };

  return (
    <section style={{ margin: "80px 0" }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center g-4">
          {/* القسم الأول */}
          <div className="col-xl-4 col-md-6 col-12 d-flex">
            <div style={boxStyle} className="w-100 h-100">
              <div style={outerCircle}>
                <div style={innerCircle}>
                  <i
                    className="fas fa-truck-moving"
                    style={{ color: "#fff", fontSize: "32px" }}
                  ></i>
                </div>
              </div>
              <p style={titleStyle}>FREE AND FAST DELIVERY</p>
              <p style={descStyle}>Free delivery for all orders over $140</p>
            </div>
          </div>

          {/* القسم الثاني */}
          <div className="col-xl-4 col-md-6 col-12 d-flex">
            <div style={boxStyle} className="w-100 h-100">
              <div style={outerCircle}>
                <div style={innerCircle}>
                  <i
                    className="fas fa-headset"
                    style={{ color: "#fff", fontSize: "32px" }}
                  ></i>
                </div>
              </div>
              <p style={titleStyle}>24/7 CUSTOMER SERVICE</p>
              <p style={descStyle}>Friendly 24/7 customer support</p>
            </div>
          </div>

          {/* القسم الثالث */}
          <div className="col-xl-4 col-md-6 col-12 d-flex">
            <div style={boxStyle} className="w-100 h-100">
              <div style={outerCircle}>
                <div style={innerCircle}>
                  <i
                    className="fas fa-lock"
                    style={{ color: "#fff", fontSize: "32px" }}
                  ></i>
                </div>
              </div>
              <p style={titleStyle}>SECURE PAYMENT</p>
              <p style={descStyle}>We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
