import React from "react";

const Dots = ({ images, index }) => {
  return (
    <div className="dots">
      {images.map((image, i) => (
        <div
          className={`dot ${index === i ? "active" : ""} ${
            index > i ? "seen" : ""
          }`}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
