import React from 'react'
import { validarCpf, validarSenha, validarNome } from '../models/cadastro'

const ValidacoesCadastro = React.createContext({
  //   cpf: validarCpf,
  //   nome: validarNome,
  //   senha: validarSenha
})

function retornoDefault () {
  return { valido: true, texto: '' }
}

export default ValidacoesCadastro
