import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro () {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(false)
  const [novidades, setNovidades] = useState(false)

  const handleForm = e => {
    e.preventDefault()

    console.log({ nome, sobrenome, cpf, promocoes, novidades })
  }

  return (
    <form onSubmit={handleForm}>
      <TextField
        id='nome'
        type='text'
        label='nome'
        variant='outlined'
        margin='normal'
        fullWidth
        onChange={e => {
          setNome(e.target.value)
        }}
      />

      <TextField
        id='sobrenome'
        type='text'
        label='sobrenome'
        variant='outlined'
        margin='normal'
        fullWidth
        onChange={e => {
          setSobrenome(e.target.value)
        }}
      />

      <TextField
        id='cpf'
        type='text'
        label='cpf'
        variant='outlined'
        margin='normal'
        fullWidth
        onChange={e => {
          setCpf(e.target.value)
        }}
      />

      <FormControlLabel
        label='promoções'
        control={
          <Switch
            name='promocoes'
            color='primary'
            checked={promocoes}
            onChange={e => {
              setPromocoes(e.target.checked)
            }}
          />
        }
      />

      <FormControlLabel
        label='novidades'
        control={
          <Switch
            name='novidades'
            color='primary'
            checked={novidades}
            onChange={e => {
              setNovidades(e.target.checked)
            }}
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro
