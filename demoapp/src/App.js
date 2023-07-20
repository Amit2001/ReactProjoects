
import './App.css';
import React , {useState} from 'react'

function App() {

  let [data,setData] = useState(1);

  function Increament(){
    data ++;
    setData(data);
  }
  function Decrement(){
    if(data>1){
      data--;
      setData(data);
    }
  }
  return (
    
    <div className='App'>
    <h1>This is {data}</h1>
    <button onClick={Increament}>Increament</button>
    <button onClick={Decrement}>Decreament</button>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
