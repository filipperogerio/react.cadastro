function validarCpf (cpf) {
  const valido = cpf.length == 11
  return { valido: valido, texto: valido ? '' : 'cpf deve ter 11 digitos' }
}

function validarSenha (senha) {
  const valido = senha.length >= 4 && senha.length <= 72
  return {
    valido: valido,
    texto: valido ? '' : 'Senha deve ter entre 4 e 72 digitos.'
  }
}

function validarNome (nome) {
  const valido = nome.length >= 3 && nome.length <= 20
  return {
    valido,
    texto: valido ? '' : 'Nome deve ter entre 3 e 20 caracteres'
  }
}

export { validarCpf, validarSenha, validarNome }
