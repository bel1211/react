import chip from '../imagens/chip.png';
import aproximacao from '../imagens/aproximacao.png';
import Logo from '../imagens/Logo.png';
import styles from '../css/cartin.module.css';
function Cartin(){
    return(
        
        <div className={styles.Cartao}>

            <div className={styles.chips}>
            <img src={chip} alt="chip" className={styles.chip}/>
            </div>

            <div className={styles.Logo}>
            <img src={Logo} alt="Logo" className={styles.Logo_img}/>
            </div>

            <div className={styles.aproximacao}>
            <img src={aproximacao} alt="aproximacao" className={styles.aproximacao_img}/>
            </div>
            
            <h3>Isabella Lima de Mendonca</h3>

        </div>
        
    )
}
export default Cartin