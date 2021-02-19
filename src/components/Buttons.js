import React from "react";

const Buttons = ({ index, images, slideLeft, slideRight, move }) => {
  return (
    <div className="arrows">
      <button
        className={`arrow arrow-prev ${index === 0 ? "inactive" : ""}`}
        onClick={slideLeft}
      >
        <img src="./slider/arrow.svg" alt="arrow prev" />
      </button>

      <button
        className={`arrow arrow-next ${
          index === images.length - 1 ? "inactive" : ""
        }`}
        onClick={slideRight}
      >
        <img src="./slider/arrow.svg" alt="arrow next" />
      </button>
    </div>
  );
};

export default Buttons;
