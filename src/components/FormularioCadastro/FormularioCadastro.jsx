import { Stepper, Typography, StepLabel, Step } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'

function FormularioCadastro ({ aoEnviar, validacoes }) {
  const [estadoAtual, setEstadoAtual] = useState(0)
  const [dadosFormulario, setDadosFormulario] = useState({})

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
    <Typography variant='h5' align='center'>
      Obrigado pelo Cadastro!!
    </Typography>
  ]

  useEffect(() => {
    if (estadoAtual === formularios.length) {
      aoEnviar(dadosFormulario)
    }
  })

  function coletarDados (dados) {
    setDadosFormulario({ ...dadosFormulario, ...dados })
    proximo()
  }

  function proximo () {
    setEstadoAtual(estadoAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={estadoAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Usuario</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[estadoAtual]}
    </>
  )
}

export default FormularioCadastro
