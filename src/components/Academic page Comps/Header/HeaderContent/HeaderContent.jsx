import styles from './HeaderContent.module.css'

import Header from '../academicsHeader/Header.jsx'
import Paragraph from '../academicsParagraph/Paragraph.jsx'  

 function HeaderContent() {
        return(
        <div className={styles['academics-content']}>
                <Header></Header>
                <Paragraph></Paragraph>
        </div>
        ); 
}

export default HeaderContent