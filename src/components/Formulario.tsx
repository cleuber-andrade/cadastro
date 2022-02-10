import { useState } from "react";
import Entrada from"../components/Entrada";
import Cliente from "../core/Cliente"; 

interface FormularioProps{
  cliente: Cliente
}

export default function Formulario(props: FormularioProps){
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "")
  const [idade, setIdade] = useState(props.cliente?.nome ?? 0)

  return(
    <div>
      {id ? (
        <Entrada 
          somenteLeitura
          texto="Código" 
          valor={id}

        />
      ): false}
      <Entrada 
        texto="Código" 
        valor={nome}
        valorMudou={setNome}
      />
      <Entrada 
        texto="Idade" 
        tipo="number" 
        valor={idade}
        valorMudou={setIdade}
      />
    </div>
  )
}