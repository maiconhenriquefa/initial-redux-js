const INCREMENTAR = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

export const incrementar = () => {
  return {
    type: INCREMENTAR,
  };
};

export const reduzir = () => {
  return {
    type: REDUZIR,
  };
};

export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR:
      state.diasRestantes = state.diasRestantes + 1;
      break;
    case REDUZIR:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, aluno);

export default reducer;
