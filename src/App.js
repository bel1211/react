
import Header from './componentes/Head';
import Login from './componentes/Log';
import Cartao from './componentes/Cart';
import './App.css';
import Cadastro from './componentes/Cadastro';
import Log from './componentes/Log';
import Head from './componentes/Head';
import Hom from './componentes/hom';
import Cart from './componentes/Cart';
import Inicio from './componentes/Inicio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  <>

  <Router>


    <Routes>
      < Route path = '/' element={<Hom/>}/> 
       <Route path = '/Log' element ={<Log />} /> 
       < Route path='/Cadastro' element={<Cadastro/>} />
       < Route path='/Inicio' element={<Inicio/>} />
       
    </Routes>
   


  

  </Router>
    </>
    
  );
}

export default App;
