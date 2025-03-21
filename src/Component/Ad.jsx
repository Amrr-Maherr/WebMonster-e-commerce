import React from "react";
import Img from "../Assets/Frame.png";

export default function Ad() {
  return (
    <section>
      <div
        className="container h-100 my-5 d-flex justify-content-center align-items-center" 
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
            minHeight: "500px",
          objectFit:"contain"
        }}
      >
      </div>
    </section>
  );
}
