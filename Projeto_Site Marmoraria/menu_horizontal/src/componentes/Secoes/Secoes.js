import React from "react"
import "./Secoes.css"
export default function Secoes() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href="#home"> Home </a> </li>
                        <li> <a href="#sobre"> sobre </a> </li>
                        <li> <a href="#pedras"> Pedras </a> </li>
                        <li> <a href="#galeria"> Galeria </a> </li>
                        <li> <a href="#contato">Contato</a> </li>
                        <li> <a href="#mais"> Mais </a> </li>
                    </ul>
                </nav>
            </div>
            <section id="home">
                <h2> Home </h2>
                <aside className="aside">
                    <a href="#home" id="home2"> Home</a>
                    <a href="#sobre" id="sobre2">Sobre</a>
                    <a href="#pedras" id="pedras2">Pedras</a>
                    <a href="#galeria" id="galeria2">Galeria</a>
                    <a href="#contato" id="contato2">Contato</a>
                    <a href="#mais" id="sobre2">Mais</a>
                </aside>
            </section>
            <section id="sobre">
                <h2> Sobre </h2>
            </section>
            <section id="pedras">
                <h2> Pedras </h2>
            </section>
            <section id="galeria">
                <h2> Galeria </h2>
            </section>
            <section id="contato">
                <h2> Contato </h2>
            </section>
            <section id="mais">
                <h2> Mais </h2>
            </section>
            <a class="voltarTopo" href=".menu"> Topo </a>
            <a class="irHome" href="#home"> Home </a>
            <a class="irSobre" href="#sobre"> Sobre </a>
            <a class="irPedras" href="#pedras"> Pedras </a>
            <a class="irGaleria" href="#galeria"> Galeria </a>
            <a class="irContato" href="#contato"> Contato</a>
            <a class="irMais" href="#sobre"> Mais </a>
            <footer>
                <h3> Rodapé </h3>
            </footer>
        </div>
    )
}