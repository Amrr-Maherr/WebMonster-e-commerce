import React from "react";
import One from "../Assets/652e82cd70aa6522dd785109a455904c.png";
import Two from "../Assets/attractive-woman-wearing-hat-posing.png";
import Three from "../Assets/ps5-slim.png";
import Four from "../Assets/OurStory-img.png";

export default function HomeGrid() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* العمود الأول يحتوي على الصورة */}
        <div className="col-md-6 my-2">
          <img src={Two} alt="Image 1" className="img-fluid w-100 h-100" />
        </div>

        {/* العمود الثاني يحتوي على النص والصور */}
        <div className="col-md-6 my-2">
          <div className="row">
            {/* النص الأول مع الصورة العرضية */}
            <div className="col-12 mb-3">
              <img src={Two} alt="Image 2" className="img-fluid w-100" />
            </div>

            {/* النص الثاني مع الصورتين المتقابلتين */}
            <div className="col-12 d-flex justify-content-between">
              <img
                src={Three}
                alt="Image 3"
                className="img-fluid"
                style={{ width: "48%" }}
              />
              <img
                src={Four}
                alt="Image 4"
                className="img-fluid"
                style={{ width: "48%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
