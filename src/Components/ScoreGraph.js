import { Bar } from "react-chartjs-2";
import { useState, useEffect } from 'react'

const ScoreGraph = () => {

  const [scoreObject, setScoreObject] = useState({})
  const [userNames, setUsernames] = useState([])
  const [dataPack, setDataPack] = useState({})
  const [scores, setScores] = useState([])

 
  useEffect(() => {
    async function fetchData() {
      const url = 'http://localhost:3001/highscores'
    const response = await fetch(url)
    const data = await response.json()
    setScoreObject(data)

    }
    fetchData()
  },[])

  useEffect(() => {
    let tmp = []
    for (const key in scoreObject) { tmp = [...tmp, scoreObject[key]['Username']] }
    setUsernames(tmp)

    let tmp2 = []
    for (const key in scoreObject) { tmp2 = [...tmp2, scoreObject[key]['Score']] }
    setScores(tmp2)

  }, [scoreObject])

  useEffect(() => {
    setDataPack({
      labels: userNames,
      datasets: [
        {
          label: 'Score',
          backgroundColor: '#e36cc4',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: scores
        }
      ]
    })
  }, [userNames, scores])

  
  return (
    <div>
      <Bar
        data={dataPack}
        options={{
          title: {
            display: true,
            text: 'Previously Set Scores',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  )
}

export default ScoreGraph