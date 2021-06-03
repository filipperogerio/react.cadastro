import React from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validarCpf, validarSenha, validarNome } from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastroContext'

function App () {
  function aoEnviar (dados) {
    console.log(dados)
  }

  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCpf,
          senha: validarSenha,
          nome: validarNome
        }}
      >
        <FormularioCadastro aoEnviar={aoEnviar} />
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

export default App
