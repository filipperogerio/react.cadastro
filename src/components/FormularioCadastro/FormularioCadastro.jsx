import React from 'react'
import { Button, TextField } from '@material-ui/core'

function FormularioCadastro () {
  return (
    <form>
      <TextField
        id='nome'
        type='text'
        value='nome'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <TextField
        id='sobrenome'
        type='text'
        value='sobrenome'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <TextField
        id='cpf'
        type='text'
        value='cpf'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <label>Promoções</label>
      <input type='checkbox' />
      <label>Novidades</label>
      <input type='checkbox' />

      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro
