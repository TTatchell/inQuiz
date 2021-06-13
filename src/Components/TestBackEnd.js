//json-server --watch db.json --port 3001



const TestBackEnd = () => {


    const handleGet = async () => {
        let url = 'http://localhost:3001/users'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    const handleSend = () => {
        const data = {
            UserName: 'John',
            Score: 9
        }

        fetch('http://localhost:3001/highscores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success', data);
            })
            .catch((error) => {
                console.error('Error', error)
            })
    }





    return (
        <div className="Test">
            <button onClick={handleGet}>
                Get Server Info
            </button>

            <br></br>

            <button onClick={handleSend}>
                Send Info
            </button>
        </div>
    )

}

export default TestBackEnd