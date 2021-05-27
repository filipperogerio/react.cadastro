import React from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro () {
  return (
    <form>
      <TextField
        id='nome'
        type='text'
        label='nome'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <TextField
        id='sobrenome'
        type='text'
        label='sobrenome'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <TextField
        id='cpf'
        type='text'
        label='cpf'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <FormControlLabel
        label='promoções'
        control={<Switch name='promocoes' color='primary' defaultChecked />}
      />

      <FormControlLabel
        label='novidades'
        control={<Switch name='novidades' color='primary' defaultChecked />}
      />

      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro
