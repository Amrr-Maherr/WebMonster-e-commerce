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

        {/* تصفح حسب الفئة وأزرار التنقل */}
        <div className="row" style={{ marginBottom: "60px" }}>
          <div className="col-6">
            <h4 style={{ fontSize: "36px", fontWeight: "600" }}>
              Browse By Category
            </h4>
          </div>
          <div className="col-6  d-flex gap-3 justify-content-end">
            <motion.button
              style={navButtonStyle}
              variants={navButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fas fa-chevron-right"></i> {/* أيقونة لليمين */}
            </motion.button>
            <motion.button
              style={navButtonStyle}
              variants={navButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fas fa-chevron-left"></i> {/* أيقونة لليسار */}
            </motion.button>
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
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", // ظل افتراضي
              }}
              variants={boxVariants}
              whileHover="hover"
            >
              <i className="fas fa-microchip" style={{ fontSize: "30px" }}></i>
              <p>Electronics</p>
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
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", // ظل افتراضي
              }}
              variants={boxVariants}
              whileHover="hover"
            >
              <i className="far fa-gem" style={{ fontSize: "30px" }}></i>
              <p>Jewelery</p>
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
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", // ظل افتراضي
              }}
              variants={boxVariants}
              whileHover="hover"
            >
              <i className="fas fa-male" style={{ fontSize: "30px" }}></i>
              <p>Men's Clothing</p>
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
              <i className="fas fa-female" style={{ fontSize: "30px" }}></i>
              <p>Women's Clothing</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
