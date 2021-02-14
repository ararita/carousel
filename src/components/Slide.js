const Slide = ({ path, caption, images }) => {
  console.log("images", images);
  return (
    <div className="slider">
      <img className={`${caption} slide`} src={path} alt={caption} />
      <div className="bottom">
        <div className="dots">
          {images.map((image) => (
            <div className="dot"></div>
          ))}
        </div>
        <div className="arrows">
          <button className="arrow arrow-prev">
            <img src="./slider/arrow.svg" alt="arrow prev" />
          </button>
          <button className="arrow arrow-next">
            <img src="./slider/arrow.svg" alt="arrow next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
