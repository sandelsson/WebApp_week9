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
        <MyList
        header="Really epic list component"
        items={[
          { id: "1", text: "This is an item"},
          { id: "2", text: "This is also an item"},
          { id: "3", text: "This is also an item ':D'"}
        ]}
        ></MyList>
      </h2>

     
    </div>
  );
}


export default App;