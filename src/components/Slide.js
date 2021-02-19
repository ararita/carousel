import React from "react";

const Slide = ({ path, caption, images, index, slideIndex, direction }) => {
  // console.log("direction", direction);
  // console.log("index", index);
  // console.log("slideIndex", slideIndex);

  // (direction === "right" && index === slideIndex - 1) ? “out-left” : “”;
  const activeSlide = index === slideIndex ? "active" : "";

  const previousSlide = index === slideIndex - 1 ? "out-left" : "";

  const nextLeft = index - 1 === slideIndex ? "next-left" : "";
  const nextRight = index + 1 === slideIndex ? "next-right" : "";

  return (
    <img
      className={`${caption} slide ${activeSlide} ${previousSlide}`}
      src={path}
      alt={caption}
    />
  );
};

export default Slide;
