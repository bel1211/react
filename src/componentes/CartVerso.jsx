import styles from '../css/cartverso.module.css';
import reta from '../imagens/reta.png';
import chipverso from '../imagens/chipverso.png';
import textoverso from '../imagens/textoverso.png';
import numeracao from '../imagens/numeracao.png';


function CartVerso(){
    return(
        
        <div className={styles.Cartao}>
            <img src={reta} alt="reta" className={styles.reta}/>
            <img src={chipverso} alt="chipverso" className={styles.chipverso}/>
            <img src={textoverso} alt="textoverso" className={styles.textoverso}/>
            <img src={numeracao} alt="numeracao" className={styles.numeracao}/>
          
            

        </div>
        
    )
}
export default CartVerso