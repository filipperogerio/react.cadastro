import React, { useState } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'

function FormularioCadastro ({ aoEnviar, validarCpf }) {
  const [estadoAtual, setEstadoAtual] = useState(0)

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={aoEnviar} />
  ]

  function proximo () {
    setEstadoAtual(estadoAtual + 1)
  }

  return <>{formularios[estadoAtual]}</>
}

export default FormularioCadastro
