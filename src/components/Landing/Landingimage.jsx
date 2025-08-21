import LandImage from "../../Images/LandingImage Container.png";
// import abstractdesign from "../../Images/Abstract Design.png";
// import abstractborderleft from "../../Images/Abstract Design border left.png";
// import abstractborderright from "../../Images/Abstract Design border right.png";
// import abstractborderbottom from "../../Images/Abstract Design border bottom.png";
// import abstractbordertop from "../../Images/Abstract Design border top.png";

function Landingimage() {
  return (
    <div className="Landingimage-container">
      <img className="Landimg" src={LandImage} alt="Landing img" />
      {/* <img className="abstractimg" src={abstractdesign} alt="Design Img" />
      <img
        className="borderleft"
        src={abstractborderleft}
        alt="Design Img border"
      />
      <img
        className="borderright"
        src={abstractborderright}
        alt="Design Img border"
      />{" "}
      <img
        className="borderbottom"
        src={abstractborderbottom}
        alt="Design Img border"
      />{" "}
      <img
        className="bordertop"
        src={abstractbordertop}
        alt="Design Img border"
      /> */}
    </div>
  );
}

export default Landingimage;
