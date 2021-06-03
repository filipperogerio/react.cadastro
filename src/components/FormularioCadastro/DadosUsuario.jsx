import React, { useState, useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastroContext'

function DadosUsuario ({ aoEnviar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, setErros] = useState({ senha: { valido: true, texto: '' } })

  const validacoes = useContext(ValidacoesCadastro)

  const validarCampos = event => {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (possoEnviar()) {
          aoEnviar({ email, senha })
        }
      }}
    >
      <TextField
        id='email'
        label='E-mail'
        type='email'
        name='email'
        variant='outlined'
        margin='normal'
        value={email}
        onChange={event => setEmail(event.target.value)}
        fullWidth
      />
      <TextField
        id='senha'
        label='Senha'
        type='password'
        name='senha'
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        variant='outlined'
        margin='normal'
        value={senha}
        onChange={event => setSenha(event.target.value)}
        onBlur={validarCampos}
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario
