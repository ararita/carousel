import React from "react";

const Slide = ({ path, caption, index, slideIndex, direction, leavingIndex }) => {
  // console.log("direction", direction);
  // console.log("index", index);
  // console.log("slideIndex", slideIndex);

  // (direction === "right" && index === slideIndex - 1) ? “out-left” : “”;
  const activeSlide = index === slideIndex ? "active" : "";

  // const previousSlide = index === slideIndex - 1 ? "out-left" : "";

  const isPrevSlide = slideIndex === index - 1;
  const isNextSlide = slideIndex === index + 1;
  const isLeavingSlide = leavingIndex === slideIndex;
  const previousSlideClasses = isPrevSlide ? "left-slide" : "";
  const nextSlideClasses = isNextSlide ? "right-slide" : "";

  let outClass = "";

  if (direction === 'right' && isLeavingSlide) {
    outClass = 'out-left';
  }   
  if (direction === 'left' && isLeavingSlide)
  {
    outClass = 'out-right';
  }


  return (
    <img
      className={`${caption} slide ${previousSlideClasses} ${nextSlideClasses} ${outClass} ${activeSlide}`}
      src={path}
      alt={caption}
    />
  );
};

export default Slide;
