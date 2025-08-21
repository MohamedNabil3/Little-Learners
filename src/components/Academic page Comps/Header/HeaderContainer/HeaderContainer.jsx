import styles from './HeaderContainer.module.css'


 import HeaderContent from '../HeaderContent/HeaderContent.jsx'
 import Image from '../Image/Image.jsx'
 function HeaderContainer() {
        return(
        <div className={styles['academics-section']}>
                <Image/> 
                 <HeaderContent/>
        </div>
        ); 
}

export default HeaderContainer