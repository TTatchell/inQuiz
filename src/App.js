import './App.css';
import { useState } from 'react'
import Quiz from './Components/Quiz'
import MenuBar from './Components/MenuBar'
import LockScreen from './Components/LockScreen'
import TestBackEnd from './Components/TestBackEnd';

function App() {

  const [appDisplay, setAppDisplay] = useState('locked')
  const [username, setUserName] = useState('')

  const updateUsername = (name) => {
    setUserName(name)
  }

  const submitUsername = () => {
    setAppDisplay('unlocked')
  }

  const handleLogOut = () => {
    setAppDisplay('locked')
    setUserName('')

  }

  switch (appDisplay) {
    case 'unlocked':
      return (
        <div className="App">
          < MenuBar
            username={username}
            handleLogOut={handleLogOut} />
            
          < Quiz username={username} />
        </div>
      )

    case 'locked':
      return (
        < LockScreen
          updateUsername={updateUsername}
          submitUsername={submitUsername}
        />
      )

    case 'testBackEnd':
      return < TestBackEnd />

    default:
      return (
        <div>Lock screen broke</div>
      )
  }


}

export default App;
