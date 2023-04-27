let perfil = document.getElementById('perfil')
let endereco = document.getElementById('endereco')
let pedidos = document.getElementById('pedidos')
let animais = document.getElementById('animais')
let abaPerfil = document.getElementById('abaPerfil')
let abaEndereco = document.getElementById('abaEndereco')
let abaPedidos = document.getElementById('abaPedidos')
let abaAnimais = document.getElementById('abaAnimais')

window.utils = {

  perfil() {
    enconder()
    mostrar(perfil)
    desabilitar()
    habilitar(abaPerfil)
  },

  endereco() {
    enconder()
    mostrar(endereco)
    desabilitar()
    habilitar(abaEndereco)
  },

  pedidos() {
    enconder()
    mostrar(pedidos)
    desabilitar()
    habilitar(abaPedidos)
  },

  animais() {
    enconder()
    mostrar(animais)
    desabilitar()
    habilitar(abaAnimais)
  },

  sair() {
    console.log("Sair")
  }
};

function enconder(){
  let tabelas = [perfil,endereco,pedidos,animais]
  tabelas.forEach(tabela => tabela.style.display = 'none');
}
function mostrar(tabela){
  tabela.style.display = '';
}

function desabilitar(){
  let tabelas = [abaPerfil,abaEndereco,abaPedidos,abaAnimais]
  tabelas.forEach(tabela => tabela.classList = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300");
}

function habilitar(tabela){
  tabela.classList = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
}