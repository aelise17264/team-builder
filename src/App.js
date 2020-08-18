import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid'
import logo from './logo.svg';
import './App.css';
import Member from './Member'

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

const[members, setMembers] = useState([])
const[teamValues, setTeamValues] = useState(initialTeamValues)


const updateTeam = (newName, newValue) => {
setMembers({...members, [newName]: newValue})

}

const submitTeam = () => {
  const member ={
    username: members.username.trim(),
    email: members.email.trim(),
    character: members.character
  }

  if(!member.username || !member.email || !member.character) return;

  fakeAxiosPost('nothing', member)
  .then(response => {
    setMembers([response.data, ...members]);
    setTeamValues(initialTeamValues)
  })
  .catch(error => {
    console.log('check your post')
  })
  .finally(() => {
    setTeamValues(initialTeamValues)
  })

}

useEffect(() => {
  fakeAxiosGet('fakeapi.com')
  .then(response => {
    setMembers(response.data)
  })
},[])

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

          {
            members.map(member => {
              return(
                <Member key={member.id} details={member}/>
              )
            })
          }
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
