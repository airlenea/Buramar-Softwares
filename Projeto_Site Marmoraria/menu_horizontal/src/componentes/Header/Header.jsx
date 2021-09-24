import React from "react"
import { Link } from "react-router-dom"


import './Header.css'

export default function Header() {
    
    return (
              
        
        <header className="menu">
           <nav className="navMenu">
                <ul>
                                        
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/sobre"> Missão </Link> </li>
                    <li> <Link to="/pedras"> Pedras </Link> </li>
                    <li> <Link to="/galeria"> Galeria </Link> </li>
                    <li> <Link to="/contato"> Contato </Link> </li>
                    {/*<li> <Link to="/mais"> Mais </Link> </li>*/}
                
                </ul>
                  
            </nav>

        </header>
        
    )
}

/*
import logotipo from '../../imagens/logoBuramar.jpeg'
import logonome from '../../imagens/logoNome.jpeg'
<li><img class="logop" id="logotipo" src={logotipo} alt={logotipo} />&nbsp;</li>
<li><img class="logon" id="logonome" src={logonome} alt={logonome}/>&nbsp;</li>*/