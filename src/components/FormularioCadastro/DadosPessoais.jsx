import React, { useState, useContext } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastroContext'
import useErros from '../../hooks/useErros'

function DadosPessoais ({ aoEnviar }) {
  const validacoes = useContext(ValidacoesCadastro)
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(false)
  const [novidades, setNovidades] = useState(false)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  const handleForm = e => {
    e.preventDefault()
    if (possoEnviar()) {
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
    }
  }

  return (
    <form onSubmit={handleForm}>
      <TextField
        id='nome'
        type='text'
        label='Nome'
        name='nome'
        variant='outlined'
        margin='normal'
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        fullWidth
        onChange={e => {
          setNome(e.target.value)
        }}
        onBlur={validarCampos}
      />

      <TextField
        id='sobrenome'
        type='text'
        label='Sobrenome'
        name='sobrenome'
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
        label='CPF'
        name='cpf'
        variant='outlined'
        margin='normal'
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth
        onBlur={validarCampos}
        onChange={e => {
          setCpf(e.target.value)
        }}
      />

      <FormControlLabel
        label='Promoções'
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
        label='Novidades'
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
        Próximo
      </Button>
    </form>
  )
}

export default DadosPessoais
