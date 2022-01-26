const nome = document.getElementById('nome')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nome.value === '' || nome.value == null) {
    messages.push('Nome é necessário')
  }

  if (password.value.length <= 6) {
    messages.push('Senha tem que ter mais de 6 caracteres')
  }

  if (password.value.length >= 20) {
    messages.push('Senha tem que ter menos de 20 caracteres')
  }

  if (password.value === 'senha') {
    messages.push('Senha não pode ser senha')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})