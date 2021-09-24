

import React from 'react';
import { Route, Switch } from "react-router-dom";


import './App.css';

import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import Pedras from '../Pedras/Pedras.jsx'
import Galeria from '../Galeria/Galeria.jsx'
import Contato from '../Contato/Contato.jsx'
{/*import Footer from '../Footer/Footer.jsx'*/}






function App() {
  return (
    <div>

      < Header /> {/* componete letra Maiuscula-vamos criar ente componente*/}

      <main>
        <Switch>
          
          <Route exact path="/" render={(props) => <Inicio />}></Route>
          <Route exact path="/sobre" render={(props) => <Sobre />}></Route>
          <Route exact path="/pedras" render={(props) => <Pedras />}></Route>
          <Route exact path="/galeria" render={(props) => <Galeria />}></Route>
          <Route exact path="/Contato" render={(props) => <Contato/>}></Route>

      

        </Switch>

      </main>

      {/*<Footer />*/}

    </div>

  )
}

export default App;
