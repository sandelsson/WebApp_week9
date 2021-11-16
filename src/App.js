import logo from './logo.svg';
import './App.css';
//import React from 'react';
import ReactDOM from 'react-dom';
import MyContainer from './components/MyContainer.js'


function App() {
  return (
    <div className="App">
      <h1>
        Hello World!
        <MyContainer/>
      </h1>
     
    </div>
  );
}


export default App;