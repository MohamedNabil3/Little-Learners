import Top_Banner from "../../Images/Top Banner.png";
import Mobile_Top_Banner from "../../Images/mobile Top Banner.png";
import "../../style/main.css";
function TopBanner() {
  return (
    <div className="TopBanner">
      {/* <img src={Top_Banner} alt="Top banner" /> */}
      <picture className="img">
        <source media="(max-width: 576px)" srcSet={Mobile_Top_Banner} />
        <img src={Top_Banner} alt="Top banner" />
      </picture>
    </div>
  );
}

export default TopBanner;
