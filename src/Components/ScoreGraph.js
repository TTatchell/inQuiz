import { Bar } from "react-chartjs-2";
import { useState, useEffect } from 'react'

const ScoreGraph = () => {



  const [scoreObject, setScoreObject] = useState({})
  const [userNames, setUsernames] = useState([])
  const [dataPack, setDataPack] = useState({})
  const [scores, setScores] = useState([])

  useEffect(() =>{
    GrabPrevScores()
  }, [])

  useEffect(()=>{
    let tmp = []
    for (const key in scoreObject) {tmp = [...tmp, scoreObject[key]['Username']]}
    setUsernames(tmp)

    let tmp2 = []
    for (const key in scoreObject) {tmp2 = [...tmp2, scoreObject[key]['Score']]}
    setScores(tmp2)

  }, [scoreObject])

  useEffect(()=>{    
    setDataPack({
      labels: userNames,
      datasets: [
          {
              label: 'Previous Score',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: scores
          }
      ]
  })
  }, [userNames])

  const GrabPrevScores = async () => {
    console.log('running grab')
    const url = 'http://localhost:3001/highscores'
    const response =  await fetch(url)
    const data = await response.json()
    console.log(data)
    setScoreObject(data)   
}
    return (
        <div>
          <button onClick={()=>GrabPrevScores()}>Show Scores</button>
        <Bar
          data={dataPack}
          options={{
            title:{
              display:true,
              text:'Previously Set Scores',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
}

export default ScoreGraph