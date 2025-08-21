import StudiesCard from "../ReusableComponent/StudiesCard/StudiesCard.jsx";
import Div from "../ReusableComponent/Header/Div/Div.jsx"; 
import styles from './StudiesContainer.module.css'
import { StudiesCardsInfo, bText, hText, pText } from "./StudiesCardsInfo.js"; // Importing feature cards information


 function StudiesContainer(props) {
        return(
            <>
            <Div buttonText={bText} headerText={hText} paragraphText={pText} />
            <div className={styles.StudiesContainer} >
                {
                    StudiesCardsInfo.map((feature, index) => (
                        <StudiesCard
                            key={index}
                            imginfo={feature.img}
                            headertext={feature.title}
                            paragraphtext={feature.description}
                        />
                    ))
                }
            </div>
            </>
        ); 
}

export default StudiesContainer