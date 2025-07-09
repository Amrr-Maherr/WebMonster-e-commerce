import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();

  const boxVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const categories = [
    { name: "fruit", label: "Fruit", icon: "fas fa-apple-alt" },
    { name: "vegetables", label: "Vegetables", icon: "fas fa-carrot" },
    { name: "meat", label: "Meat", icon: "fas fa-drumstick-bite" },
    { name: "other", label: "Other", icon: "fas fa-ellipsis-h" },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <section>
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-12 d-flex align-items-center gap-4">
            <div
              style={{
                width: "20px",
                height: "40px",
                borderRadius: "4px",
                backgroundColor: "rgba(219, 68, 68, 1)",
              }}
            ></div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgba(219, 68, 68, 1)",
              }}
              className="p-0 m-0"
            >
              Categories
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-6">
            <h4 style={{ fontSize: "36px", fontWeight: "600" }}>
              Browse By Food Category
            </h4>
          </div>
        </div>

        <div className="row">
          {categories.map((cat) => (
            <div className="col-xl-3 col-md-4 col-12" key={cat.name}>
              <motion.div
                className="cat-box mx-auto my-3 d-flex align-items-center justify-content-center flex-column gap-3"
                style={{
                  width: "170px",
                  height: "145px",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "4px",
                  cursor: "pointer",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                }}
                variants={boxVariants}
                whileHover="hover"
                onClick={() => handleCategoryClick(cat.name)}
              >
                <i className={cat.icon} style={{ fontSize: "30px" }}></i>
                <p>{cat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
