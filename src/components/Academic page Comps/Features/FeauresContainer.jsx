import CardContainer from "../ReusableComponent/Card/CardContainer/CardContainer.jsx";
import Div from "../ReusableComponent/Header/Div/Div.jsx";
import styles from "./FeauresContainer.module.css";
import {
  featureCardsInfo,
  bText,
  hText,
  pText,
} from "../Features/FeaturesCardsInfo.js"; // Importing feature cards information

function FeauresContainer(props) {
  return (
    <>
      <Div buttonText={bText} headerText={hText} paragraphText={pText} />
      <div className={styles.FeaturesContainer}>
        {featureCardsInfo.map((feature, index) => (
          <CardContainer
            key={index}
            imginfo={feature.img}
            headertext={feature.title}
            paragraphtext={feature.description}
          />
        ))}
      </div>
    </>
  );
}

export default FeauresContainer;
