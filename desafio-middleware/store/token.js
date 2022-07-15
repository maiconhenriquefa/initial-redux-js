import getLocalStorage from './util/getLocalStorage.js';

//constantes
const FETCH_STARTED = 'token/FETCH_STARTED';
const FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const FETCH_ERROR = 'token/FETCH_ERROR';

//Actions Creators
export const tokenFetchStarted = () => ({ type: FETCH_STARTED });

export const tokenFetchSucess = (user) => ({
  type: FETCH_SUCCESS,
  payload: user,
  localStorage: 'token',
});

export const tokenFetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  data: getLocalStorage('token', null),
  error: null,
};

function token(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Reducer Currying
export function tokenFetch(user) {
  return async (dispatch) => {
    try {
      dispatch(tokenFetchStarted());
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        },
      );
      const { token } = await response.json();
      dispatch(tokenFetchSucess(token));
    } catch (error) {
      dispatch(tokenFetchError(error.message));
    }
  };
}

export default token;
