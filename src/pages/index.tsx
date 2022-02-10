import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 22, "3"),
    new Cliente("Joana", 12, "3"),
  ]

  function clienteSelecioando(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Exclui ${cliente.nome}`)
  }

  return (
    <div className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>        
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecioando} clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}
