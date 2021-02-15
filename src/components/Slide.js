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
  // console.log("index", index);
  // console.log("slideIndex", slideIndex);

  const activeSlide = index === slideIndex ? "active" : "";

  return (
    <img
      className={`${caption} slide ${activeSlide}`}
      src={path}
      alt={caption}
    />
  );
};

export default Slide;
