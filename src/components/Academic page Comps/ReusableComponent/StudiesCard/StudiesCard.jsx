import styles from './StudiesCard.module.css'
import CardImage from "../Card/CardImage/CardImage.jsx";
import CardHeader from "../Card/CardHeader/CardHeader.jsx";
import CardParagraph from "../Card/CardParagraph/CardParagraph.jsx";
import Shape from "./Shape/Shape.jsx";

 function StudiesCard(props) {
    // const cardWidth = `calc(${100 / props.cardsPerRow}% - 2em)`;
        return(
                <div className={styles.StudiesCard}>
                    <Shape />
                    <CardImage imgsrc={props.imginfo.imgsrc} style={{   position: "absolute",
                                                                        marginTop: "9%",
                                                                        left: "50%", // Position the element 50% from the left
                                                                        transform: "translateX(-50%)", // Move the element back by 50% of its own width, effectively centering it horizontally. This is called a "negative margin trick" and is commonly used for horizontally centering elements.
                                                                        width: "80%",
                                                                        height: "59%",
                                                                        borderRadius: "8px",
                                                                        zIndex: 1
                                                                  }}/>
                    <CardHeader text={props.headertext}/>
                    <CardParagraph text={props.paragraphtext} /> 
                </div>
        );
}

export default StudiesCard