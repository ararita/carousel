import React from "react";

const Slide = ({ path, caption, images, slideLeft, slideRight, index }) => {
  console.log("index", index);

  return (
    <div className="slider">
      <img className={`${caption} slide active`} src={path} alt={caption} />
      {/* <img src={images[index]} alt={index} /> */}
      <div className="bottom">
        <div className="dots">
          {images.map((image) => (
            <div className="dot"></div>
          ))}
        </div>
        <div className="arrows">
          <button className="arrow arrow-prev" onClick={slideLeft}>
            <img src="./slider/arrow.svg" alt="arrow prev" />
          </button>
          <button className="arrow arrow-next" onClick={slideRight}>
            <img src="./slider/arrow.svg" alt="arrow next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
