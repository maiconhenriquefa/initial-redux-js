import React from 'react';
import { connect } from 'react-redux';

const incrementar = () => ({ type: 'INCREMENTAR' });
const decrementar = () => ({ type: 'DECREMENTAR' });

function App({ contador, incrementar, decrementar }) {
  return (
    <div>
      <h1>Total:{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { contador: state };
};

const mapDispatchToProps = { incrementar, decrementar };

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Com Hooks

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Total:{state}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
//         Incrementar
//       </button>
//       <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>
//         Decrementar
//       </button>
//     </div>
//   );
// }

// export default App;
