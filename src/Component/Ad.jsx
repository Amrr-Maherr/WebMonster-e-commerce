import React from "react";

export default function Ad({ image, title, text, buttonLabel, onButtonClick }) {
  return (
    <section>
      <div
        className="container my-5 d-flex justify-content-center align-items-center position-relative"
        style={{
          width: "100%",
          minHeight: "500px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
          style={{
            background: "rgba(0,0,0,0.45)",
            borderRadius: "18px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              fontSize: "2.2rem",
              marginBottom: "18px",
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "22px" }}>{text}</p>
          <button
            className="btn btn-danger px-4 py-2"
            style={{
              fontWeight: "600",
              fontSize: "1.1rem",
              borderRadius: "8px",
            }}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
