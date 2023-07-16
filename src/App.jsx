import './App.css';
import { Connect } from 'react-redux';

function App(props) {
  const inc=()=>{
props.increment()
  }
  return (
    <div className="App">
      <h1>{props.state.count}</h1>
     <button onClick={inc}>inc</button>
     <button >dec</button>
    </div>
  );
}

const mapDispatchtoprops=(dispatch)=>{
  inc:dispatch(inc())
}

export default Connect(mapDispatchtoprops,null)(App);
