import React, { useState, useEffect } from "react";
import Slide from "./Slide";

function Slider() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

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
      setIndex((index) => index + 1);
    }
  };

  const slideLeft = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
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
              />
            ))}
        <div className="bottom">
          <div className="dots">
            {images.map((image, i) => (
              <div
                className={`dot ${index === i ? "active" : ""} ${
                  index > i ? "seen" : ""
                }`}
                key={i}
              ></div>
            ))}
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Slider;
