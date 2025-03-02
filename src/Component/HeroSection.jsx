import { motion } from "framer-motion";
import proOne from "../Assets/pexels-huy-phan-316220-2015876.jpg";
import proTwo from "../Assets/pexels-polina-tankilevitch-4440525.jpg";
import proThree from "../Assets/pexels-tree-of-life-seeds-1708680-3259600.jpg";
import Footer from "./Footer";
import MainNav from "./MainNav";
import Category from "./Category";

export default function HeroSection() {
  return (
    <>
      <MainNav/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-2 d-none d-md-block">
              <motion.div
              style={{margin:"40px 0px"}}
                className="h-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="list-group">
                  {[
                    "Electronics",
                    "Fashion",
                    "Home & Kitchen",
                    "Beauty & Health",
                    "Sports & Outdoors",
                    "Toys & Games",
                    "Automotive",
                    "Books",
                    "Groceries",
                  ].map((category, index) => (
                    <motion.li
                      key={category}
                      className="list-group-item border-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a href="#" className="text-decoration-none text-dark">
                        {category}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="col-xl-10 col-12">
              <div
                id="carouselExample"
                style={{ margin: "40px 0px" }}
                className="carousel slide"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={proOne}
                      className="d-block w-100"
                      alt="Slide 1"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={proTwo}
                      className="d-block w-100"
                      alt="Slide 2"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={proThree}
                      className="d-block w-100"
                      alt="Slide 3"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Category/>
      <Footer/>
    </>
  );
}
