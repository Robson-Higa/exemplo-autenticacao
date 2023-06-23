const token = localStorage.getItem('token')
import './index.css'
import './fonts.css'
// Se token não tiver valor...
if (!token) {
  window.location.href = 'login.html'
} else {
  document.getElementById('app').innerHTML = `
    <h1>Seja bem vindo!</h1>
    <a href="logout.html">Clique aqui para sair</a>
  `
}
