import React, { useState, useEffect } from "react";
import Slide from "./Slide";

function Slider() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const activeSlide = isActive ? "block" : "none";

  const flipActiveness = () => {
    setIsActive(!isActive);
  };

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
            console.log(response);

            return response.json();
          }
          throw new Error("Could not fetch images");
        })
        .then((myJson) => {
          console.log(myJson);
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
      setIndex((index + 1) % images.length);
    }
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex > -1) {
      setIndex(nextIndex);
    }
  };

  if (error) return <h2>Something went wrong</h2>;
  if (!images) return null;

  return (
    <div className="slider-container">
      {error
        ? error
        : images.map((image) => (
            <Slide
              path={image.path}
              caption={image.caption}
              key={image.caption}
              images={images}
              slideLeft={slideLeft}
              slideRight={slideRight}
              index={index}
            />
          ))}
    </div>
  );
}

export default Slider;
