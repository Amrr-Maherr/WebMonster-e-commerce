import { motion } from "framer-motion";

export default function Category() {
  // أنواع الحركة (Variants)
  const boxVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", // إضافة ظل عند التحويم
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const navButtonVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(230, 230, 230, 1)", // تغيير لون الخلفية عند التحويم
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9, // تصغير الزر عند الضغط
    },
  };

  const navButtonStyle = {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(245, 245, 245, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem", // حجم الأيقونة
    color: "#555", // لون الأيقونة
    cursor: "pointer",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", // إضافة ظل
  };

  return (
    <section>
      <div className="container my-5">
        {/* عنوان القسم */}
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-12">
            <div className="d-flex align-items-center gap-4">
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
        </div>
        <div className="row" style={{ marginBottom: "60px" }}>
          <div className="col-6">
            <h4 style={{ fontSize: "36px", fontWeight: "600" }}>
              Browse By Food Category
            </h4>
          </div>
        </div>

        {/* صناديق الفئات */}
        <div className="row">
          <div className="col-xl-3 col-md-4 col-12">
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
            >
              <i className="fas fa-apple-alt" style={{ fontSize: "30px" }}></i>
              <p style={{textAlign:"center"}}>Fruits & Vegetables</p>
            </motion.div>
          </div>
          <div className="col-xl-3 col-md-4 col-12">
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
            >
              <i
                className="fas fa-bread-slice"
                style={{ fontSize: "30px" }}
              ></i>
              <p>Bakery</p>
            </motion.div>
          </div>
          <div className="col-xl-3 col-md-4 col-12">
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
            >
              <i
                className="fas fa-drumstick-bite"
                style={{ fontSize: "30px" }}
              ></i>
              <p>Meat & Poultry</p>
            </motion.div>
          </div>
          <div className="col-xl-3 col-md-4 col-12">
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
            >
              <i className="fas fa-fish" style={{ fontSize: "30px" }}></i>
              <p>Seafood</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
