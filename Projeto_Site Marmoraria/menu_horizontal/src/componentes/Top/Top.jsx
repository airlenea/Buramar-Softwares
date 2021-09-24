import React from "react"
/*import { Link } from "react-router-dom"*/
import logotipo from '../../imagens/logoBuramar.jpeg'

import './Top.css'

export default function Top(props) {
    return (
                
      
              <div className="top">
                 <img src={logotipo} className={classes.logo} alt="Buramar" />
                
              </div>
    );
}

