import React from "react";

export default function HomeBoxes() {
  const style1 = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#2F2E30",
    marginBottom: "10px",
  };

  const style2 = {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#000000",
  };

  return (
    <>
      <section style={{ margin: "140px" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center bg-drk text-center">
            {/* القسم الأول */}
            <div className="col-xl-4 col-md-6 col-12 d-flex flex-column align-items-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={style1}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={style2}
                >
                  {/* أيقونة التوصيل */}
                  <i
                    className="fas fa-truck-moving"
                    style={{ color: "#fff", fontSize: "30px" }}
                  ></i>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  FREE AND FAST DELIVERY
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>

            {/* القسم الثاني */}
            <div className="col-xl-4 col-md-6 col-12 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={style2}
                >
                  {/* أيقونة الدعم */}
                  <i
                    className="fas fa-headset"
                    style={{ color: "#fff", fontSize: "30px" }}
                  ></i>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  24/7 CUSTOMER SERVICE
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>

            {/* القسم الثالث */}
            <div className="col-xl-4 col-md-6 col-12 d-flex flex-column align-items-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={style1}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={style2}
                >
                  {/* أيقونة الأمان */}
                  <i
                    className="fas fa-lock"
                    style={{ color: "#fff", fontSize: "30px" }}
                  ></i>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  SECURE PAYMENT
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  We return money within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
