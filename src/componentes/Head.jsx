import Logo from '../imagens/Logo.png'
import styles from '../css/Head.module.css'
function Head(){
    return(
        <header className={styles.content}>
            <img src={Logo} alt="Logo" className={styles.Logo}/>
        
        </header>
        
    )
}
export default Head