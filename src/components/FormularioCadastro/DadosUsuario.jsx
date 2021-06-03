import React, { useState, useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastroContext'
import useErros from '../../hooks/useErros'

function DadosUsuario ({ aoEnviar }) {
  const validacoes = useContext(ValidacoesCadastro)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

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
