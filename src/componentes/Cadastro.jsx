import Head from './Head';
import styles from '../css/Cadastro.module.css';

function Cadastro() {
    return (
        <>
        <Head/>
        <h1>CADASTRO!</h1>

         <div className={styles.div}>
           <form><br></br><br></br>
           <label for="fname">Nome: </label>
           <input type="text" id="fname" name="fname"></input><br></br><br></br>
           <label for="email">Email: </label>
           <input type="email" name="email"></input><br></br><br></br>
           <label for="text">RG:  </label>
           <input type="text" id="Rg" name="Rg" className={styles.rg}></input><br></br><br></br>
           <label for="text">CPF:</label>
            <input type="text" name="cpf" id="cpf" className={styles.cpf}/><br></br><br></br>
            <label for="text">End: </label>
           <input type="text" id="end" name="end" className={styles.end}></input><br></br><br></br>
           <button type="submit">Enviar</button>
           </form><br></br><br></br>
           
         
          


        </div>

      </>
    );
  }
  
  export default Cadastro;
  