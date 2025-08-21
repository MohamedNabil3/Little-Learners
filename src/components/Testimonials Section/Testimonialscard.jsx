function Testimonialscard({ imgsrc, Name, starsimgsrc, description }) {
  return (
    <div className="Testimonialscard-container">
      <div className="profileimgcontainer">
        <img src={imgsrc} alt="" />
      </div>
      <p>{Name}</p>
      <div className="starsimgcontainer">
        <img src={starsimgsrc} alt="" />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Testimonialscard;
