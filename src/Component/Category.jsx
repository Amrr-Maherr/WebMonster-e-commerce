import { motion } from "framer-motion";

export default function Category() {
  // أنواع الحركة (Variants)
  const boxVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
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
            <button
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "rgba(245, 245, 245, 1)",
              }}
            >
              Next
            </button>
            <button
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "rgba(245, 245, 245, 1)",
              }}
            >
              Prev
            </button>
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
                cursor: "pointer", // تغيير شكل المؤشر للإشارة إلى أنه قابل للنقر
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
