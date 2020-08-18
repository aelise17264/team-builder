import React, {useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid'
// import logo from './logo.svg';
import './App.css';
// import Member from './Member'

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
setTeamValues({...teamValues, [newName]: newValue})

}

const submitTeam = () => {
  const member ={
    id: uuid(),
    username: teamValues.username.trim(),
    email: teamValues.email.trim(),
    character: teamValues.character
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
  .then(response => 
    setMembers(response.data)
  )
},[])

const onChange = event => {
  const {name, value} = event.target
  updateTeam(name, value)
}

const onSubmit = event => {
  event.preventDefault()
  submitTeam()
}

  return (
    <div className="App">
      <header><h1>Join the Quest</h1></header>
      <form className='formContainer'>
        <div className='formInfo'>
          <label>Username:
          <input
          value={teamValues.username}
          onChange={onChange}
          name='username'
          type='text'
          maxLength='25'
          placeholder='enter your username here'
          />
          </label>
          
          <label>Email:
          <input
          value={teamValues.email}
          onChange={onChange}
          name='email'
          type='email'
          maxLength='30'
          placeholder='enter your email here'

          />
          </label>
          
          <label>Choose Your Character:
          <select
          value={teamValues.character}
          name='character'
          onChange={onChange}
          >
            <option value=''>-- Select your Player --</option>
            <option value='Cleric'>Cleric</option>
            <option value='Ranger'>Ranger</option>
            <option value='Wizard'>Wizard</option>
            <option value='Bard'>Bard</option>
            <option value='Barbarian'>Barbarian</option>
            
            </select>
          </label>

        <button type='submit' onClick={onSubmit} 
        disabled={!teamValues.username || !teamValues.email || !teamValues.character? true : false }
          >Submit</button>
          </div>
</form>
          {
            members.map(member => {
             
            return(
                <div className='memberCard' key={member.id}>
                    <h3>Username: {member.username}</h3>
                    <h3>Email: {member.email}</h3>
                    <h3>Character: {member.character}</h3>
                </div>
              )
            })
          }
        
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
