import styles from './CardHeader.module.css'

 function CardHeader(props) {
        return(
            <h3 className={styles.CardHeader}>{props.text}</h3>  
        ); 
}

export default CardHeader