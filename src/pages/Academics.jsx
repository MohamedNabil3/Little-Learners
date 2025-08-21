import styles from "../style/AcademicsPage.module.css";
import HeaderContainer from "../components/Academic page Comps/Header/HeaderContainer/HeaderContainer.jsx";
import FeauresContainer from "../components/Academic page Comps/Features/FeauresContainer.jsx";
import StudiesContainer from "../components/Academic page Comps/Studies/StudiesContainer.jsx";
import GalleriesContainer from "../components/Academic page Comps/Galleries/GalleriesContainer.jsx";

function Academics() {
  return (
    <div className={styles.AcademicsPage}>
      <HeaderContainer />
      <FeauresContainer />
      <StudiesContainer />
      <GalleriesContainer />
    </div>
  );
}

export default Academics;
