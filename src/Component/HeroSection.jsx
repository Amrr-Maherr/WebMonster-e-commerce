import { motion } from "framer-motion";
import proOne from "../Assets/real-food-pyramid-assortment-top-view.jpg";
import proTwo from "../Assets/top-view-bunch-fresh-food-donation.jpg";
import proThree from "../Assets/view-table-with-articles-food-family.jpg";
import Footer from "./Footer";
import MainNav from "./MainNav";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

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
                  {/* Slide 1 */}
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
                    <div
                      className="carousel-caption d-flex flex-column justify-content-center align-items-start"
                      style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        textAlign: "left",
                        position: "absolute",
                        maxWidth: "100vw",
                        background: "rgba(0,0,0,0.4)",
                        borderRadius: 0,
                        padding: "32px 32px 32px 10vw",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <h2
                        className="mb-3"
                        style={{
                          fontWeight: 700,
                          fontSize: "2.5rem",
                          color: "#fff",
                        }}
                      >
                        Fresh & Organic Foods
                      </h2>
                      <p
                        className="mb-4"
                        style={{ color: "#fff", fontSize: "1.2rem" }}
                      >
                        Discover our wide range of healthy and organic food
                        products for your family.
                      </p>
                      <button
                        className="btn btn-danger px-4 py-2"
                        style={{ fontWeight: 600, fontSize: "1.1rem" }}
                        onClick={() => navigate("/all-products")}
                      >
                        Visit Our Shop
                      </button>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="carousel-item" style={{ height: "100%" }}>
                    <img
                      src={proTwo}
                      className="d-block w-100"
                      alt="Slide 2"
                      style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div
                      className="carousel-caption d-flex flex-column justify-content-center align-items-start"
                      style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        textAlign: "left",
                        position: "absolute",
                        maxWidth: "100vw",
                        background: "rgba(0,0,0,0.4)",
                        borderRadius: 0,
                        padding: "32px 32px 32px 10vw",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <h2
                        className="mb-3"
                        style={{
                          fontWeight: 700,
                          fontSize: "2.5rem",
                          color: "#fff",
                        }}
                      >
                        Donate Food, Share Love
                      </h2>
                      <p
                        className="mb-4"
                        style={{ color: "#fff", fontSize: "1.2rem" }}
                      >
                        Join our food donation program and help families in need
                        with fresh meals.
                      </p>
                      <button
                        className="btn btn-danger px-4 py-2"
                        style={{ fontWeight: 600, fontSize: "1.1rem" }}
                        onClick={() => navigate("/all-products")}
                      >
                        Visit Our Shop
                      </button>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="carousel-item" style={{ height: "100%" }}>
                    <img
                      src={proThree}
                      className="d-block w-100"
                      alt="Slide 3"
                      style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <div
                      className="carousel-caption d-flex flex-column justify-content-center align-items-start"
                      style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        textAlign: "left",
                        position: "absolute",
                        maxWidth: "100vw",
                        background: "rgba(0,0,0,0.4)",
                        borderRadius: 0,
                        padding: "32px 32px 32px 10vw",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <h2
                        className="mb-3"
                        style={{
                          fontWeight: 700,
                          fontSize: "2.5rem",
                          color: "#fff",
                        }}
                      >
                        Family Meals, Happy Moments
                      </h2>
                      <p
                        className="mb-4"
                        style={{ color: "#fff", fontSize: "1.2rem" }}
                      >
                        Enjoy delicious meals together with our special family
                        food bundles.
                      </p>
                      <button
                        className="btn btn-danger px-4 py-2"
                        style={{ fontWeight: 600, fontSize: "1.1rem" }}
                        onClick={() => navigate("/all-products")}
                      >
                        Visit Our Shop
                      </button>
                    </div>
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
