import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro ({ aoEnviar, validarCpf }) {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(false)
  const [novidades, setNovidades] = useState(false)
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } })

  const handleForm = e => {
    e.preventDefault()
    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
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
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth
        onBlur={e => {
          const estaValido = validarCpf(e.target.value)
          setErros({ cpf: estaValido })
        }}
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
