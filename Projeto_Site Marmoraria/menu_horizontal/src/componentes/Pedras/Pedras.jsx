import React from "react"
import Titulo from "../Titulo/Titulo"
import Granito from '../../imagens/FotoPedras/granitos.jpeg'
import Marmore from '../../imagens/FotoPedras/marmore-mix.jpeg'
import Quartzo from '../../imagens/FotoPedras/Quartzo.jpeg'


import './Pedras.css'

export default function Pedras() {
    return (
        <div>

            <Titulo texto="Pedras" />

            <div className="pedras">
                <body>
                    <div class="container1p">
                        <div class="box">
                            <img id="Granito" src={Granito} alt={Granito} />
                            <h1> Granito </h1>
                            <p> O granito é um tipo comum de rocha magmática, intrusiva ou plutónica de textura fina não metamórfica, média ou grosseira, composta essencialmente pelos minerais: quartzo, mica e feldspato, tendo como minerais acessórios mica, horneblenda, zircão e outros minerais.</p>
                        </div>
                    </div>

                    <div class="container2p">
                        <div class="box">
                            <img id="Marmore" src={Marmore} alt={Marmore} />
                            <h1> Mármore </h1>
                            <p> Mármore é uma rocha metamórfica originada de calcário exposto a altas temperaturas e pressão de baixa a moderada. Por este motivo as maiores jazidas de mármore são encontradas em regiões de rocha matriz calcária e onde houve atividade vulcânica. O mármore é uma rocha explorada para uso em construção civil. </p>
                        </div>
                    </div>

                    <div class="container3p">
                        <div class="box">
                        <img id="Quartzo" src={Quartzo} alt={Quartzo}/>
                            <h1> Quartzo </h1>
                            <p> Quartzo é considerado o mineral mais abundante existente na Terra. ... As pedras de quartzo são compostas principalmente de Dióxido de Silício (SiO2), estando presente em todos os tipos de formações rochosas do planeta, sejam ígneas, metamórficas ou sedimentares. </p>
                        </div>
                    </div>
                   
                </body>

            </div>

        </div>
    )
}
