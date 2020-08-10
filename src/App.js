import React from 'react';
import logo from './logo.svg';
import './App.css'; 

const userName = 'Igor';
const age = 30;
const human = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={{
          fontSize: 20 + 12
        }}>
        <i>Hello Hello Hello</i>
        </h2>
        <p>
        my name: {userName}
        </p>
        <p>
        my age: {age}
        </p>
        <p>
        {human && 'I am from Earth'}
        </p>
        <p>
        {human ? 'i am born on Earth' : 'i am not born on Earth'}
        {null}
        {undefined}
        {false}
        {true}
        {human}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
