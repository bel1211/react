import CartIn from './CartIn';
import styles from '../css/Inicio.module.css';
import CartVerso from './CartVerso';
import primeiraimagem from '../imagens/primeiraimagem.jpg';
import moca from '../imagens/moca.jpg';
import teste1 from '../imagens/teste1.png';
import dowload from '../imagens/download.jpg';


function Inicio() {
    return (
        <>
         <img src={teste1} alt="reta" className={styles.teste1}/>
        <h1 className={styles.noms}>Olá Isabella!</h1> 
       
        
        <p>Saldo: </p>
        <div className={styles.valor}>
          R$2.000,00
       </div>

      <div className={styles.meio}>
      <button className={styles.button}>Pix</button>
      <button className={styles.button}>Pagamentos</button>
      <button className={styles.button}>Tranferir</button>
      <button className={styles.button}>Depositar</button>
      <b className={styles.cont}>Conta: 21045-5</b>
    

      <b className={styles.cont2}>Agência: 2410</b>
      
  
      
      


      </div>
      
      <div className={styles.cartoes}>
        Cartões
      </div>

      <div className={styles.imcartoes}>
      <CartIn/>
      <CartVerso/>
      </div>

      <div className={styles.Descubramais}>
        Descubra Mais
      </div>

      <div className={styles.casa}>
           
       <div className={styles.notice}>
        <div className={styles.campoum}>
        <img src = {primeiraimagem} alt='primeiraimagem' className={styles.teste}/>
        <p className={styles.tnegum}><a href='https://einvestidor.estadao.com.br/educacao-financeira/dicas-financeiras-nao-ficar-vermelho-2022' target = '_blank'>5 Dicas para não ficar nno vermelho!</a></p>
        
        </div>
        <div className={styles.campodois}>
        <img src={moca} alt='Duas pessoas mexendo no computador' />
        <p className={styles.tnegdois}><a href='https://fintech.com.br/blog/fintech/vantagens-dos-bancos-digitais/' target='_blank'>7 Vantagens de usar o banco digital.</a></p>
       
        </div>
        <div className={styles.campotres}>
        <img src={dowload} alt='Mulher ao telefone' />
        <p className={styles.tnegtres}><a href='https://g1.globo.com/economia/' target='_blank'>Notícias de nossa economia</a></p>
      
        </div>
        </div>
        </div>
        

      </>
    );
  }
  
  export default Inicio;
  