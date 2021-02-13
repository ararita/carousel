import React, { useState, useEffect } from "react";

function Slider() {
  const [images, setImages] = useState([]);

  const getData = () => {
    fetch("slider-images.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setImages(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {images.map((image) => (
        <img src={image.path} />
      ))}
    </div>
  );
}

export default Slider;
