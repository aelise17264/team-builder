import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid'
import logo from './logo.svg';
import './App.css';

const initialTeam =  [{
  id: uuid(),
  username: 'Ian',
  email: 'ianbrander@gmail.com',
  character: 'bard',
},]

const initialTeamValues = {
  username: '',
  email: '',
  character: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeam })
}
const fakeAxiosPost = (url, { username, email, character }) => {
  const newMember = { id: uuid(), username, email, character }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}



function App() {
  return (
    <div className="App">
      <header><h1>Join the Quest</h1></header>
      <form className='formContainer'>
        <div className='formInfo'>
          <label>Username:
          <input/>
          </label>
          
          <label>Email:
          <input/>
          </label>
          
          <label>Choose Your Character:
          <select>

            </select>
          </label>
        </div>



      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
