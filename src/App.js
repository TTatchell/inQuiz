import './Styles/App.css';
import { useState } from 'react'
import Quiz from './Components/Quiz'
import MenuBar from './Components/MenuBar'
import LockScreen from './Components/LockScreen'
import ScoreGraph from './Components/ScoreGraph'
import { Container } from 'react-bootstrap/'


function App() {

  const [appDisplay, setAppDisplay] = useState('locked')
  const [username, setUserName] = useState('')

  const updateUsername = (name) => { setUserName(name) }

  const submitUsername = () => { setAppDisplay('unlocked') }

  const handleLogOut = () => {
    setAppDisplay('locked')
    setUserName('')
  }

  const handleScoreGraph = () => { setAppDisplay('scoreGraph') }

  const handleQuizButton = () => { setAppDisplay('unlocked') }

  switch (appDisplay) {
    case 'unlocked':
      return (
        <Container fluid >
            < MenuBar
              username={username}
              handleLogOut={handleLogOut}
              handleScoreGraph={handleScoreGraph}
              handleQuizButton={handleQuizButton} />
            < Quiz username={username} />
        </Container>
      )

    case 'locked':
      return (
        <Container fluid className="p-0">
          < LockScreen
            updateUsername={updateUsername}
            submitUsername={submitUsername}
          />
        </Container>
      )

    case 'scoreGraph':
      return (
        <Container fluid>
          < MenuBar
            username={username}
            handleLogOut={handleLogOut}
            handleScoreGraph={handleScoreGraph}
            handleQuizButton={handleQuizButton} />
          <ScoreGraph />
        </Container>
      )

    default:
      return (
        <div>Lock screen broke</div>
      )
  }


}

export default App;
