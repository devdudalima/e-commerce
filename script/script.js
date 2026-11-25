// LISTA DE PRODUTOS
let produtos = [
  {
    nome: 'celular',
    preco: 2600,
    estoque: 10,
    promocao: true,
    emoji: '&#128241;' // 📱
  },
  {
    nome: 'notebook',
    preco: 4500,
    estoque: 5,
    promocao: false,
    emoji: '&#128187;' // 💻
  },
  {
    nome: 'fone de ouvido bluetooth',
    preco: 250,
    estoque: 30,
    promocao: true,
    emoji: '&#127911;' // 🎧
  },
  {
    nome: 'monitor 24 polegadas',
    preco: 950,
    estoque: 8,
    promocao: false,
    emoji: '&#128421;' // 🖥️
  },
  {
    nome: 'teclado mecânico',
    preco: 320,
    estoque: 1,
    promocao: false,
    emoji: '&#9000;' // ⌨️
  },
  {
    nome: 'mouse sem fio',
    preco: 120,
    estoque: 4,
    promocao: true,
    emoji: '&#128433;' // 🖱️
  },
  {
    nome: 'smartwatch',
    preco: 800,
    estoque: 12,
    promocao: true,
    emoji: '&#8986;' // ⌚
  },
  {
    nome: 'caixa de som portátil',
    preco: 400,
    estoque: 15,
    promocao: false,
    emoji: '&#128266;' // 🔊
  }
];

// FILTROS

let emPromocao = produtos.filter( p => p.promocao === true );

let maisBaratos = [...produtos].sort((a, b) => a.preco - b.preco);

let maisCaros = [...produtos].sort((a,b) => b.preco - a.preco)

let baixoEstoque = produtos.filter( p => p.estoque <= 5 )

let itemPesquisado = produtos.filter( p => p.nome.includes('mouse'))

// DOM

let inputPesquisa = document.querySelector('#pesquisa')
let btnBarato = document.querySelector('#mais-barato')
let btnCaro = document.querySelector('#mais-caro')
let btnPromocao = document.querySelector('#em-promocao')
let btnEstoqueBaixo = document.querySelector('#estoque-baixo')

inputPesquisa.addEventListener( 'input', pesquisar())
btnBarato.addEventListener( 'click', filtrarMaisBarato())

function pesquisar () {

}

function filtrarMaisBarato () {
    
}


