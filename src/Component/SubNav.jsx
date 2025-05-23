import { motion } from "framer-motion";
import "../Style/SubNav.css";

export default function SubNav() {
  return (
    <motion.header
      className="subnav-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <nav className="subnav-nav">
        <div className="subnav-container">
          <p className="subnav-text p-0 m-0">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="/" className="subnav-link">
            Shop Now
          </a>
        </div>
        <div className="subnav-select">
          {/* <select
            name="language"
            id="language-select"
            className="subnav-language"
          >
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select> */}
        </div>
      </nav>
    </motion.header>
  );
}
