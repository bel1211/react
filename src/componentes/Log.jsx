
import styles from '../css/Log.module.css';
import {Link} from 'react-router-dom';
function Log(){
    return(
        
        <div className={styles.div}>
           <form><br></br><br></br>
           <label for="fname">CPF: </label>
           <input type="text" id="fname" name="fname"></input><br></br><br></br>
            <label for="lname">Senha: </label>
            <input type="password" name="password"></input><br></br><br></br>
          <Link to='/Inicio'><button type="submit">Enviar</button></Link> 
           </form><br></br><br></br>
           
          <Link to='/Cadastro'><a className={styles.preto}>Abrir Conta</a></Link> 
          


        </div>
        
    )
}
export default Log;