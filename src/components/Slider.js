import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import Dots from "./Dots";
import Buttons from "./Buttons";
import userEvent from "@testing-library/user-event";

function Slider() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch("slider-images.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Could not fetch images");
        })
        .then((myJson) => {
          setImages(myJson);
        })
        .catch((err) => {
          console.log("error", err);
          setError(err.message);
        });
    };
    getData();
  }, [setIndex]);

  const slideRight = () => {
    if (index < images.length - 1) {
      setIndex((index) => index + 1);
      setDirection((direction) => (direction = "right"));
    }
  };

  const slideLeft = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
      setDirection((direction) => (direction = "left"));
    }
  };

  if (error) return <h2>Something went wrong</h2>;
  if (!images) return null;

  return (
    <div className="slider-container">
      <div className="slider">
        {error
          ? error
          : images.map((image, i) => (
              <Slide
                key={i}
                path={image.path}
                caption={image.caption}
                images={images}
                slideLeft={slideLeft}
                slideRight={slideRight}
                index={index}
                slideIndex={i}
                direction={direction}
              />
            ))}
        <div className="bottom">
          <Dots images={images} index={index} />
          <Buttons
            images={images}
            index={index}
            slideLeft={slideLeft}
            slideRight={slideRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
