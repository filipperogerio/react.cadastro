import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function DadosEntrega ({ aoEnviar }) {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        aoEnviar({ cep, endereco, numero, estado, cidade })
      }}
    >
      <TextField
        id='cep'
        label='CEP'
        type='number'
        name='cep'
        variant='outlined'
        margin='normal'
        value={cep}
        onChange={event => setCep(event.target.value)}
      />
      <TextField
        id='endereco'
        label='Enderço'
        type='text'
        name='endereco'
        variant='outlined'
        margin='normal'
        fullWidth
        value={endereco}
        onChange={event => setEndereco(event.target.value)}
      />
      <TextField
        id='numero'
        label='Numero'
        type='number'
        name='numero'
        variant='outlined'
        margin='normal'
        value={numero}
        onChange={event => setNumero(event.target.value)}
      />
      <TextField
        id='estado'
        label='Estado'
        type='text'
        name='estado'
        variant='outlined'
        margin='normal'
        value={estado}
        onChange={event => setEstado(event.target.value)}
      />
      <TextField
        id='cidade'
        label='Cidade'
        type='text'
        name='cidade'
        variant='outlined'
        margin='normal'
        value={cidade}
        onChange={event => setCidade(event.target.value)}
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega
