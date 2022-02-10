import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Cliente from "../core/Cliente";
import { useState } from "react";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 22, "3"),
    new Cliente("Joana", 12, "3"),
  ]

  function clienteSelecioando(cliente: Cliente){
    setCliente(cliente)
    setVisivel("formulario")
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Exclui ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente){
    setVisivel("tabela")
  }

  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel("formulario")
  }

  

  return (
    <div className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>        
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecioando} clienteExcluido={clienteExcluido}
            />
          </>   
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={()=> setVisivel("tabela")}
          />
        )}        
      </Layout>
    </div>
  )
}
