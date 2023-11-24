function salvar(texto) {
    window.sessionStorage.setItem('cor',texto)
}

document.getElementById('InputTexto').addEventListener('blur',(event) => {
salvar(event.target.value)
} )