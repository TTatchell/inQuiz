const SendScore = (pack) => {
    
    fetch('http://localhost:3001/highscores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pack)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Sent data success!", data);
    })
    .catch((error) => {
        console.error('Error', error)
    })


}

export default SendScore