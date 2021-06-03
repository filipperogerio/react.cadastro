import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function DadosUsuario ({ aoEnviar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        aoEnviar({ email, senha })
      }}
    >
      <TextField
        id='email'
        label='E-mail'
        type='email'
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
        variant='outlined'
        margin='normal'
        value={senha}
        onChange={event => setSenha(event.target.value)}
        fullWidth
      />
      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario
