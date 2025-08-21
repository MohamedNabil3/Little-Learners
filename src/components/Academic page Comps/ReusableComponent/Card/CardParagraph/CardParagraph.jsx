import styles from './CardParagraph.module.css'


 function CardParagraph(props) {
        return(
            <p className={styles.CardParagraph}>{props.text}</p>  
        ); 
}

export default CardParagraph