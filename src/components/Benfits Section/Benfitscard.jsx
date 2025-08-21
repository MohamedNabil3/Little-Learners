function Benfitscard({ imgsrc, title, description }) {
  return (
    <div className="Benfitscard-container">
      <img src={imgsrc} alt="Card Icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Benfitscard;
