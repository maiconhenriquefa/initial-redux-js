# Repositório criado com anotações do meu ponta pé inicial no Redux.

- Aprendizado pelo Curso Redux da plataforma Origamid

# Redux

<aside>
💡 Redux é uma biblioteca para gerenciamento e atualização de estados.

</aside>

### Initial

- Podemos utiilizar através de wepback instalando com npm ou yarn. Ou podemos utilizar diretamente sem bundler, importando um arquivo que compartilha o redux como vairável global.

### Store

O Store dá acesso ao estado global e nos permite despachamos ações para modificar o mesmo. Como parametro o store recebe uma função **reducer** responsável por retornar o estado atual da store.

- Store
- getState()
- Reducer()

```jsx
const initialState = {
  nome: 'Thaiz',
  id: 199,
};

function reducer(state = initialState, action) {
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState();
console.log(state); // {nome: 'Thaiz', id: 199}
```

### Actions

Para mudar o estado utilizamos uma **ação** (ACTION) através do método **dispatch** dentro da **store**. O dispatch recebe um type e um valor payload (valor útil)

- Sem payload
- Constantes
- Action Creator
- Eventos

```jsx
//VALOR GLOBAL => para evitar erros na string
const INCREMENTAR = 'INCREMENTAR';
const SOMAR = 'SOMAR';

//Action creator
function incrementar() {
  return {
    type: INCREMENTAR,
  };
}
function somar(payload) {
  return {
    type: SOMAR,
    payload,
  };
}

const initialState = 10;
function reducer(state = initialState, action) {
  if (action.type === INCREMENTAR) {
    return state + 1;
  }
  if (action.type === SOMAR) {
    return state + action.payload;
  } else {
    return state;
  }
}
const store = Redux.createStore(reducer);

store.dispatch(somar(22));
store.dispatch(incrementar());
const state = store.getState();

console.log(state);

const button = document.getElementById('button');
const value = document.getElementById('value');
button.addEventListener('click', () => {
  store.dispatch(incrementar());
  value.innerText = store.getState();
});
```

### Subscribe

<aside>
💡 Esta é a ideia básica por trás do Redux: um único lugar centralizado para conter o estado global em sua aplicação, e padrões específicos a seguir ao atualizar esse estado para tornar o código previsível.

</aside>

O método Subscribe do store ativa uma função sempre que uma ação for disparada no dispatch. Já o unSubscribe acontece no retorno do método subcribe e serve para parar a ação.

- Atualização do estado
- Subscribe
- Unsubscribe

```jsx
function render() {
  const state = store.getState();
  const value = document.getElementById('value');
  value.innerText = state;
}

render();
store.subscribe(render);
const unSubscribe = store.subscribe(() => {
  console.log('foi');
});

const button = document.getElementById('button');
button.addEventListener('click', () => {
  store.dispatch(incrementar());
});
unSubscribe();
```

### Reducer

- Switch
- combineReducers
  - Divide o código do reducer em diferenter funções que são combinadas ao final

```jsx
function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case SOMAR:
      return state + action.payload;
    default:
      return state;
  }
}

function modal(state = true, action) {
  switch (action.type) {
    case 'ABRIR':
      return true;
    case 'FECHAR':
      return false;
    default:
      return state;
  }
}

const reducer = Redux.combineReducers({ contador, modal });
const store = Redux.createStore(reducer);
```

### Regra 01 - Função Pura ⇒ Função Reducer

- Sem Efeito Colateral ⇒ modificação fora do seu escopo, ferindo o pattern de Single Responsible Aplication (SRP)
- Deve retornar um mesmo valor ⇒ Sem modificações futuras, por exemplo a mudança de data..

### Regra 02 - Imutabilidade ⇒ Função Reducer

- Sempre retornar um novo estado quando esse for modificado
- A imutabilidade ajuda a não interferir no state inicial

---

### Immer

- É um pacote que fornece uma função para utilizar métodos para mutar arrays e objetos com imutabilidade
- Ela faz parte do pacote Redux Toolkit (kit de ferramenta para faciltar o redux)

---

### Middleware

O middleware acontece entre o momento que a ação é disparada (dispatch) e antes de chegar no reducer. Ao final do middleware sempre temos que chamar a próxima ação com next(action)

- store
- next
- action
- applyMiddleware
- thunk
  - Operações assíncronas
