import React from "react"
import Titulo from "../Titulo/Titulo"
import Balcoes from '../../imagens/FotoGaleria/balcoes.jpeg'
import Cozinhas from '../../imagens/FotoGaleria/cozinhas.jpeg'
import Escadas from '../../imagens/FotoGaleria/escadas.jpeg'
import Lavatorios from '../../imagens/FotoGaleria/lavatorios.jpeg'
import Pisos from '../../imagens/FotoGaleria/pisos.jpeg'


import './Galeria.css'

export default function Galeria() {
    return (
        <div>

            <Titulo texto="Galeria" />

            <div class="container1">
                <div class="box">
                    <img id="Balcoes" src={Balcoes} alt={Balcoes} />
                    <h1> Balcões </h1>
                </div>
            </div>

            <div class="container2">
                <div class="box">
                    <img id="Cozinhas" src={Cozinhas} alt={Cozinhas} />
                    <h1> Cozinhas </h1>
                </div>
            </div>
          
            <div class="container3">
                    <div class="box">
                        <img id="Lavatorios" src={Lavatorios} alt={Lavatorios} />
                        <h1> Lavatórios </h1>
                    </div>
            </div>

            <div class="container4">
                <div class="box">
                    <img id="Pisos" src={Pisos} alt={Pisos} />
                    <h1> Pisos </h1>
                </div>
            </div>

            <div class="container5">
                <div class="box">
                    <img id="Escadas" src={Escadas} alt={Escadas} />
                    <h1> Escadas </h1>
                </div>
            </div>

        </div>       
    )
}