import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "black",
        color: "#ffffff",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-xl-3 col-md-6"
          >
            <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
              Box&amp;Buy
            </h4>
            <p>
              Leading online store for the latest electronics. Quality products,
              unbeatable prices, and exceptional customer service.
            </p>
          </motion.div>

          {/* الروابط السريعة */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-xl-3 col-md-6"
          >
            <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a
                  href="/"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* دعم العملاء */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-xl-3 col-md-6"
          >
            <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
              Customer Support
            </h4>
            <p>
              <i className="fas fa-phone-alt"></i> +1 800 123 456
            </p>
            <p>
              <i className="fas fa-envelope"></i> support@eliteeshop.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Cairo, Egypt
            </p>
          </motion.div>

          {/* مواقع التواصل الاجتماعي */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-xl-3 col-md-6"
          >
            <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: "15px" }}>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", fontSize: "20px" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", fontSize: "20px" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", fontSize: "20px" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", fontSize: "20px" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* حقوق النشر */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            marginTop: "40px",
            textAlign: "center",
            borderTop: "1px solid #333",
            paddingTop: "20px",
          }}
        >
          <p>© {new Date().getFullYear()} Box&amp;Buy. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
