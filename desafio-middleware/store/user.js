//constantes
const FETCH_STARTED = 'user/FETCH_STARTED';
const FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_ERROR = 'user/FETCH_ERROR';

//Actions Creators
export const userFetchStarted = () => ({ type: FETCH_STARTED });

export const userFetchSucess = (user) => ({
  type: FETCH_SUCCESS,
  payload: user,
});

export const userFetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function user(state = initialState, action) {
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
export function userFetch(token) {
  return async (dispatch) => {
    try {
      dispatch(userFetchStarted());
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/api/user',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const data = await response.json();
      dispatch(userFetchSucess(data));
    } catch (error) {
      dispatch(userFetchError(error.message));
    }
  };
}

export default user;
