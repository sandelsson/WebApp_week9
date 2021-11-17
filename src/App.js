import logo from './logo.svg';
import './App.css';
//import React from 'react';
import ReactDOM from 'react-dom';
import MyContainer from './components/MyContainer.js'
import MyList from './components/MyList';


function App() {
  return (
    <div className="App">
      <h1>
        Hello World!
      </h1>

      <h2>
        <MyContainer/>
      </h2>

     
    </div>
  );
}



export default App;