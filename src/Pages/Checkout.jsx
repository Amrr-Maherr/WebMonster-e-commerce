import React from "react";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";

const Checkout = () => {
  // البيانات الوهمية للمنتجات
  const products = [
    {
      id: 1,
      name: "Slim Fit Jeans",
      price: 39.99,
      quantity: 1,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", // صورة وهمية
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      price: 19.99,
      quantity: 2,
      image: "https://fakestoreapi.com/img/61pHSquWqvL._AC_UL640_QL65_ML3_.jpg", // صورة وهمية
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 129.99,
      quantity: 1,
      image: "https://fakestoreapi.com/img/71Hkg0pVvlL._AC_SY340_.jpg", // صورة وهمية
    },
  ];

  const containerStyle = {
    fontFamily: '"Open Sans", sans-serif', // استبدل بخط DeFacto الفعلي
    backgroundColor: "#f8f9fa", // رمادي فاتح جدًا
    padding: "20px",
    minHeight: "100vh", // اجعل الكونتينر يغطي الشاشة بالكامل
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    border: "1px solid #e9ecef", // رمادي فاتح
  };

  const cardHeaderStyle = {
    backgroundColor: "#fff", // أبيض
    padding: "15px",
    borderBottom: "1px solid #e9ecef", // رمادي فاتح
  };

  const cardTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#343a40", // رمادي داكن
    margin: 0,
  };

  const productListStyle = {
    padding: "15px",
  };

  const productItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: "15px",
  };

  const productImageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "15px",
  };

  const productInfoStyle = {
    flex: 1,
  };

  const productNameStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#212529",
    marginBottom: "5px",
  };

  const productQuantityStyle = {
    fontSize: "0.9rem",
    color: "#6c757d",
  };

  const productPriceStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#212529",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const formLabelStyle = {
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#495057",
    marginBottom: "5px",
    display: "block",
  };

  const formInputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "1rem",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    outline: "none",
  };

  const orderSummaryStyle = {
    padding: "15px",
  };

  const summaryItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  };

  const summaryLabelStyle = {
    fontSize: "1rem",
    color: "#495057",
  };

  const summaryValueStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#212529",
  };

  const totalLabelStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const totalValueStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
  };

  const checkoutButtonStyle = {
    backgroundColor: "rgba(219, 68, 68, 1)", // أحمر DeFacto
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "12px 20px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    display: "block",
    textAlign: "center",
    textDecoration: "none",
  };

  const additionalInfoStyle = {
    textAlign: "center",
    marginTop: "20px",
    color: "#6c757d",
  };

  const iconStyle = {
    marginRight: "8px",
  };

  // أنماط إضافية لخيارات الدفع
  const paymentOptionsStyle = {
    padding: "15px",
  };

  const paymentOptionStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const paymentIconStyle = {
    fontSize: "24px",
    marginRight: "10px",
    color: "#495057",
  };

  // حساب المجموع الفرعي
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shippingCost = 5.0; // تكلفة شحن وهمية
  const discount = 2.0; // خصم وهمي
  const total = subtotal + shippingCost - discount;

  return (
      <>
          <MainNav/>
      <div style={containerStyle}>
        <div className="container">
          <div className="row">
            {/* معلومات الطلب (الجانب الأيمن) */}
            <div className="col-md-8">
              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h5 style={cardTitleStyle}>
                    <i className="fas fa-shopping-cart" style={iconStyle}></i>
                    Shopping Cart
                  </h5>
                </div>
                <div style={productListStyle}>
                  {products.map((product) => (
                    <div style={productItemStyle} key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={productImageStyle}
                      />
                      <div style={productInfoStyle}>
                        <h6 style={productNameStyle}>{product.name}</h6>
                        <p style={productQuantityStyle}>
                          Quantity: {product.quantity}
                        </p>
                        <p style={productPriceStyle}>
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h5 style={cardTitleStyle}>Shipping Information</h5>
                </div>
                <div style={{ padding: "15px" }}>
                  <div style={formGroupStyle}>
                    <label htmlFor="name" style={formLabelStyle}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      style={formInputStyle}
                      placeholder="Your Name"
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="address" style={formLabelStyle}>
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      style={formInputStyle}
                      placeholder="Your Address"
                    />
                  </div>
                  {/* المزيد من حقول النموذج */}
                </div>
              </div>

              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h5 style={cardTitleStyle}>Payment Information</h5>
                </div>
                <div style={paymentOptionsStyle}>
                  <div style={paymentOptionStyle}>
                    <i className="fab fa-cc-visa" style={paymentIconStyle}></i>
                    <span>Visa</span>
                  </div>
                  <div style={paymentOptionStyle}>
                    <i
                      className="fab fa-cc-mastercard"
                      style={paymentIconStyle}
                    ></i>
                    <span>Mastercard</span>
                  </div>
                  <div style={paymentOptionStyle}>
                    <i className="fab fa-paypal" style={paymentIconStyle}></i>
                    <span>PayPal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ملخص الطلب (الجانب الأيسر) */}
            <div className="col-md-4">
              <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                  <h5 style={cardTitleStyle}>Order Summary</h5>
                </div>
                <div style={orderSummaryStyle}>
                  <div style={summaryItemStyle}>
                    <span style={summaryLabelStyle}>Subtotal:</span>
                    <span style={summaryValueStyle}>
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div style={summaryItemStyle}>
                    <span style={summaryLabelStyle}>Shipping:</span>
                    <span style={summaryValueStyle}>
                      ${shippingCost.toFixed(2)}
                    </span>
                  </div>
                  <div style={summaryItemStyle}>
                    <span style={summaryLabelStyle}>Discount:</span>
                    <span style={summaryValueStyle}>
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                  <hr />
                  <div style={summaryItemStyle}>
                    <span style={totalLabelStyle}>Total:</span>
                    <span style={totalValueStyle}>${total.toFixed(2)}</span>
                  </div>
                  <a href="#" style={checkoutButtonStyle}>
                    <i className="fas fa-lock" style={iconStyle}></i>
                    Secure Checkout
                  </a>
                </div>
              </div>

              <div style={additionalInfoStyle}>
                <p>
                  <i className="fas fa-truck" style={iconStyle}></i>
                  Fast & Reliable Delivery
                </p>
                <p>
                  <i className="fas fa-gift" style={iconStyle}></i>
                  Free Gift with Every Order
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
          <Footer/>
    </>
  );
};

export default Checkout;
