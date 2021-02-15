import React from "react";

const Slide = ({
  path,
  caption,
  images,
  slideLeft,
  slideRight,
  index,
  slideIndex,
}) => {
  console.log("index", index);
  console.log("slideIndex", slideIndex);

  return (
    <img
      className={`${caption} slide ${index === slideIndex ? "active" : ""}`}
      src={path}
      alt={caption}
    />
  );
};

export default Slide;
