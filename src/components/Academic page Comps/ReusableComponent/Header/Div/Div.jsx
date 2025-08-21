import styles from './Div.module.css'
import Button from "../Button/Button.jsx";
import Header from "../Header/Header.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";

 function Div(props) {
        return(
            <div className={styles.Div}>
                <Button text={props.buttonText} />
                <Header text={props.headerText}/>
                <Paragraph text={props.paragraphText} /> 
            </div>
            
        ); 
}

export default Div