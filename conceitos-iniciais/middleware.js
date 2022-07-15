// considere esse reducer para os próximos exemplos
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'REDUZIR':
      return state - 1;
    default:
      return state;
  }
}

// middleware, recebe store, next e action.
const logger = (store) => (next) => (action) => {
  console.log(action);
  // temos sempre que chamar o next(action), para enviarmos
  // a ação para o próximo middleware (ou reduce se esse for o último)
  return next(action);
};
// Configura o middleware, podemos passar quantos quisermos.
const middleware = Redux.applyMiddleware(logger);

// Passar o middleware como segundo ou tercerio argumento do createStore
// Se o segundo argumento não for uma função, este será considerado
// o estado inicial da aplicação.
const store = Redux.createStore(reducer, middleware);

store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'REDUZIR' });
