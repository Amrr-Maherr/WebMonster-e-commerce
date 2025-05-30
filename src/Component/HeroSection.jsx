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
      <section
        style={{ width: "100%", height: "100vh", padding: 0, margin: 0 }}
      >
        <div className="container-fluid" style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="col-12" style={{ height: "100%", padding: 0 }}>
              <div
                id="carouselExample"
                className="carousel slide"
                style={{ height: "100%" }}
              >
                <div className="carousel-inner" style={{ height: "100%" }}>
                  <div
                    className="carousel-item active"
                    style={{ height: "100%" }}
                  >
                    <img
                      src={proOne}
                      className="d-block w-100"
                      alt="Slide 1"
                      style={{ height: "100vh", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item" style={{ height: "100%" }}>
                    <img
                      src={proTwo}
                      className="d-block w-100"
                      alt="Slide 2"
                      style={{ height: "100vh", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item" style={{ height: "100%" }}>
                    <img
                      src={proThree}
                      className="d-block w-100"
                      alt="Slide 3"
                      style={{ height: "100vh", objectFit: "cover" }}
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
      <Category />
    </>
  );
}
