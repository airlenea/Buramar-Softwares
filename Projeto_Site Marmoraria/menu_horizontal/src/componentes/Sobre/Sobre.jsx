import React from "react"
import Titulo from "../Titulo/Titulo"
import Casal from '../../imagens/FotoSobre/Casal.jpeg';
import Casal_filhos from '../../imagens/FotoSobre/Casal_filhos.jpeg';

import './Sobre.css'

export default function Sobre() {
    return (
        <div>
          
            <Titulo texto="Sobre a empresa"/>
            

            <div className="sobre">
            <br></br> <br></br>
                <h2>
                   <p> A Buramar, empresa familiar e jenuinamente Francana,
                   nasceu há duas décadas com a missão de realizar sonhos com produtos e serviços personalizados e ênfase em qualidade, 
                    tecnologia, competitividade e prazo de entrega.</p><br></br>
                    <p> +40.000 clientes atendidos</p> <br></br>
                    <p> +200.000 M2 de pedras vendidas</p>
                </h2>
                <br></br><br></br>
                <h2>
                    <p>Prezamos pela transparência;</p><br></br>
                    <p>Melhores negociações com fornecedores;</p><br></br>
                    <p>Melhor custo x benefício;</p><br></br>
                    <p>Flexibilidade;</p><br></br>
                    <p>Respeito ao Cliente </p><br></br>
                </h2>

                               
                <figure>
                   <img id="Casal" src={Casal}/>
                   <img id="Casal_filhos" src={Casal_filhos} />
                </figure>
                     
            </div>
          
        </div>
    )
}