import styles from './Header.module.css'

 function Header() {
        return(
        <div className={styles['academics-header']}>
                <button className={styles['academics-button']}>Academics</button>
                <h2>Nurturing Young Minds for Success</h2>
        </div>
        ); 
}

export default Header