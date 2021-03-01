import React from "react";

const Slide = ({ path, caption, index, slideIndex, direction, leavingIndex, outClass }) => {
  

  const activeSlide = index === slideIndex ? "active" : "";
  const isPrevSlide = slideIndex === index - 1;
  const isNextSlide = slideIndex === index + 1;
  const isLeavingSlide = leavingIndex === slideIndex;
  const previousSlideClasses = isPrevSlide ? "left-slide" : "";
  const nextSlideClasses = isNextSlide ? "right-slide" : "";
  const outLeft = direction === 'right' && isLeavingSlide ? "out-left" : ""
  const outRight =  direction === 'left' && isLeavingSlide ? "out-right" : ""

  return (
    <img
      className={`${caption} slide ${previousSlideClasses} ${nextSlideClasses} ${outLeft} ${outRight} ${activeSlide}`}
      src={path}
      alt={caption}
    />
  );
};

export default Slide;
