import React from "react"
import Title from "../Titulo/Titulo.jsx"



import './Contato.css'


export default function Contatos() {
    return (
        <>
            <Title texto="Seção de Contatos!" />
            <div className="contato">
                <div>
                    <h1 id="titulo"> Fale conosco </h1>
                    <p id="subtitulo"> Complete suas informações</p>
                </div>
                <br></br>
               

                <form>
                    <fieldset class= "grupo">
                        <div>
                            <label for="name"><strong>Nome</strong></label>
                            <input type="test" name="nome" id= "nome" required></input>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                        
                            <label for="sobrenome"><strong>Sobrenome</strong></label>
                            <input type="test" name="sobrenome" id= "sobrenome" required></input>
                        </div>
                        
                        <br></br>
                     
                        <div class="campo">
                            <label for="endereco"><strong>Endereço</strong></label>
                            <input type="test" name="endereco" id= "endereco" required></input>
                        </div>
                     
                        <div class="campo">
                            <label for="email"><strong>Email</strong></label>
                            <input type="email" nome="email" id="email" required></input>
                        </div>
                       
                    </fieldset>
                  
                   
                    
                    <div>
                        <label > <strong>Tipo telefone</strong></label>
                        <select id="tipoTelefone">
                            <option selected disabled value=""> Selecione </option>
                            <option> Celular </option>
                            <option> Whatsapp </option>
                            <option> Comercial </option>
                            <option> Recado </option>
                        </select>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <label for="telefone"><strong>Telefone</strong></label>
                            <input type="test" name="telefone" id= "telefone" required></input>
                    </div>
                    <br></br>
                    
                    <div>
                        <label > <strong>Tipo telefone</strong></label>
                        <select id="tipoTelefone">
                            <option selected disabled value=""> Selecione </option>
                            <option> Celular </option>
                            <option> Whatsapp </option>
                            <option> Comercial </option>
                            <option> Recado </option>
                        </select>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <label for="telefone"><strong>Telefone</strong></label>
                            <input type="test" name="telefone" id= "telefone" required></input>
                    </div>
                    <br></br>
                    
                    <div>
                        <label> <strong>Tipo telefone</strong></label>
                        <select id="tipoTelefone">
                            <option selected disabled value=""> Selecione </option>
                            <option> Celular </option>
                            <option> Whatsapp </option>
                            <option> Comercial </option>
                            <option> Recado </option>
                        </select>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <label for="telefone"><strong>Telefone</strong></label>
                            <input type="test" name="telefone" id= "telefone" required></input>
                    </div>
                    <br></br>
                    <fieldset>
                    <div>
                          <label> Selecione do motivo de seu contato</label><br></br>
                          <input type="checkbox" id="orcamento" name="orcamento" value="orcamento"></input>
                          <label for="orcamento">Orçamento</label>
                          &nbsp; &nbsp;<input type="checkbox" id="duvidas" name="duvidas" value="duvidas"></input>
                          <label for="duvidas">Duvidas</label>
                          &nbsp; &nbsp;<input type="checkbox" id="sugestoes" name="sugestoes" value="sugestoes"></input>
                          <label for="sugestoes">Sugestoes</label>
                      </div>
                    

                    </fieldset> 

                    <br></br>
                                      
                    <div>
                        <label>Descrição</label>
                        <br></br>
                        <textarea row="30" id="descricao" name="descricao"> </textarea>
                      
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button class="botao" tupe="submit">Concluído</button>
                  

                </form>
                    


            </div>
           
        </>
    )
}
