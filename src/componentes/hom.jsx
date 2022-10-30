import Cart from './Cart';
import Log from './Log';
import Head from './Head';
import styles from '../css/hom.module.css';
import ultima from '../imagens/ultima.png';



function Hom(){
    return(
        <>
        
          <Head/>
          <h1 className={styles.jeito}>O BANCO DO SEU JEITO!</h1>
          <div className={styles.test}>
          <img src={ultima} alt="banco" className={styles.teste2}/>
          </div>
      
          <Cart/>
          <Log/>
        
        </>



    )
}

    export default Hom;