import React from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validarCpf, validarSenha, validarNome } from './models/cadastro'

function App () {
  function aoEnviar (dados) {
    console.log(dados)
  }

  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário Cadastro
      </Typography>
      <FormularioCadastro
        aoEnviar={aoEnviar}
        validacoes={{ cpf: validarCpf, senha: validarSenha, nome: validarNome }}
      />
    </Container>
  )
}

export default App
