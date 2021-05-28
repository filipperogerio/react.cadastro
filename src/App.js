import React from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

function App () {
  function aoEnviar (dados) {
    console.log(dados)
  }
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviar} />
    </Container>
  )
}

export default App
