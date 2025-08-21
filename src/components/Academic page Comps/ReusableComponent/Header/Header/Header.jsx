import styles from './Header.module.css'

 function Header(props) {
        return(
            <h2 className={styles.Header}>{props.text}</h2>  
        ); 
}

export default Header