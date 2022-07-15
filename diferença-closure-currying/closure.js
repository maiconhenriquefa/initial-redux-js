//escopo léxico => variável definida pela localização
//léxico => conjunto dos vocábulos de uma língua

function init() {
  const name = 'Maicon';

  function printName() {
    console.log(name);
  }

  printName();
}

init();

//closure => É uma função que tem acesso ao escopo dos pais, mesmo após o fechamento da função pai
function storeSum(x) {
  return function (y) {
    return x + y;
  };
}

const store5 = storeSum(5);
const store2 = storeSum(2);

console.log(store5(2)); // 7
console.log(store2(2)); // 4
