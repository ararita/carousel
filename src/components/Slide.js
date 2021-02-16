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

  const previousSlide = index === slideIndex - 1 ? "out-left" : "";

  return (
    <img
      className={`${caption} slide ${activeSlide} ${previousSlide}`}
      src={path}
      alt={caption}
    />
  );
};

export default Slide;
