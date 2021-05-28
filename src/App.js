import React from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

function App () {
  function aoEnviar (dados) {
    console.log(dados)
  }
  function validarCpf (cpf) {
    const valido = cpf.length == 11
    return { valido: valido, texto: valido ? '' : 'cpf deve ter 11 digitos' }
  }
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>
        Formulário Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviar} validarCpf={validarCpf} />
    </Container>
  )
}

export default App
