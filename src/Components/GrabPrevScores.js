const GrabPrevScores = async () => {

    console.log('running grab')


    const url = 'http://localhost:3001/highscores'

    const response =  await fetch(url)

    const data = await response.json()

    console.log(data)

    return data


}

export default GrabPrevScores