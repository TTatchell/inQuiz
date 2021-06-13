import './Styles/App.css';
import { useState } from 'react'
import Quiz from './Components/Quiz'
import MenuBar from './Components/MenuBar'
import LockScreen from './Components/LockScreen'
import ScoreGraph from './Components/ScoreGraph'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [appDisplay, setAppDisplay] = useState('locked')
  const [username, setUserName] = useState('')

  const updateUsername = (name) => {setUserName(name)}

  const submitUsername = () => {setAppDisplay('unlocked')}

  const handleLogOut = () => {
    setAppDisplay('locked')
    setUserName('')
  }

  const handleScoreGraph = () => {setAppDisplay('scoreGraph')}

  const handleQuizButton = () => {setAppDisplay('unlocked')}

  switch (appDisplay) {
    case 'unlocked':
      return (
        <div className="App">
          < MenuBar
            username={username}
            handleLogOut={handleLogOut}
            handleScoreGraph={handleScoreGraph}
            handleQuizButton={handleQuizButton} />

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

    case 'scoreGraph':
      return (
        <div>

          < MenuBar
            username={username}
            handleLogOut={handleLogOut}
            handleScoreGraph={handleScoreGraph}
            handleQuizButton={handleQuizButton} />
          <ScoreGraph />
        </div>
      )

    default:
      return (
        <div>Lock screen broke</div>
      )
  }


}

export default App;
