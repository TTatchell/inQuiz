import './App.css';
import { useState } from 'react'
import Quiz from './Components/Quiz'
import MenuBar from './Components/MenuBar'
import LockScreen from './Components/LockScreen'
import LoginForm from './Components/LoginForm'
import CreateNewUser from './Components/CreateNewUser'

function App() {

  const [appDisplay, setAppDisplay] = useState('locked')

  const handleLoginClick = () => {
    console.log('login')
    setAppDisplay('loginForm')
  }

  const handleCreateClick = () => {
    console.log('create')
    setAppDisplay('createUser')
  }

  switch (appDisplay) {
    case 'unlocked':
      return (
        <div className="App">
          < MenuBar />
          < Quiz />
        </div>
      )

    case 'locked':
      return (
        < LockScreen
          handleLoginClick={handleLoginClick}
          handleCreateClick={handleCreateClick}
        />
      )

    case 'loginForm':
      return (
        <LoginForm />
      )

    case 'createUser':
      return <CreateNewUser />

    default:
      return (
        <div>Lock screen broke</div>
      )
  }


}

export default App;
