function Sectionheading({ subtitle, title, description }) {
  return (
    <div className="Sectionheading-container">
      <div className="headingbox">{subtitle}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Sectionheading;
