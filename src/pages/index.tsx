import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Cliente from "../core/Cliente";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");  

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel("tabela")
    })
  }

  function clienteSelecioando(cliente: Cliente){
    setCliente(cliente)
    setVisivel("formulario")
  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel("formulario")
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }  

  return (
    <div className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao 
                className="mb-4" 
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>        
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecioando} clienteExcluido={clienteExcluido}
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
