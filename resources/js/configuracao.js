let contato = document.getElementById('contato')
let cliente = document.getElementById('cliente')
let pedido = document.getElementById('pedido')
let pagamento = document.getElementById('pagamento')
let abaContato = document.getElementById('abaContato')
let abaCliente = document.getElementById('abaCliente')
let abaPedido = document.getElementById('abaPedido')
let abaPagamento = document.getElementById('abaPagamento')

window.utils = {

  contato() {
    enconder()
    mostrar(contato)
    desabilitar()
    habilitar(abaContato)
  },

  cliente() {
    enconder()
    mostrar(cliente)
    desabilitar()
    habilitar(abaCliente)
  },

  pedido() {
    enconder()
    mostrar(pedido)
    desabilitar()
    habilitar(abaPedido)
  },

  pagamento() {
    enconder()
    mostrar(pagamento)
    desabilitar()
    habilitar(abaPagamento)
  }
};

function enconder(){
  let tabelas = [contato,cliente,pedido,pagamento]
  tabelas.forEach(tabela => tabela.style.display = 'none');
}
function mostrar(tabela){
  tabela.style.display = '';
}

function desabilitar(){
  let tabelas = [abaContato,abaCliente,abaPedido,abaPagamento]
  tabelas.forEach(tabela => tabela.classList = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300");
}

function habilitar(tabela){
  tabela.classList = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
}