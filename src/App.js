import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, isLogged } from './actions';

function App() {
  const counter = useSelector(state =>state.counter)
  const isLoggedIn = useSelector(state =>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <br />
      {/*<button onClick={()=>dispatch(isLogged())}>toggle</button>*/}
      {isLoggedIn?<button onClick={()=>dispatch(isLogged())}>Hide</button>:<button onClick={()=>dispatch(isLogged())}>Show</button>}          
      {isLoggedIn && <h3>Valuable information I shouldn't see</h3>}
    </div>
  );
}

export default App;
