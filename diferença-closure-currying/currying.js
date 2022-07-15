//currying => Uma função curried permite passarmos um argumento por vez, ao invés de todos de uma vez. Encadeamento de funções

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(4)(5)); // 9
