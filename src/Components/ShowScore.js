import { Button } from 'react-bootstrap'
import uuid from 'react-uuid'

const ShowScore = (props) => {
    return (
        <div>
            <h1>
                You Scored {props.score} out of 10!
            </h1>
            <br></br>

            <div className='correctAnswer'>

                <h3>Correct Answers:</h3>
                {props.correctAnswers.map(answer => {
                    const split = answer.split('$#')

                    return (
                        <div key={uuid()} >
                            <h4>{split[0]}</h4>
                            <h5>{split[1]}</h5>
                            <br></br>
                        </div>
                    )
                }
                )}
            </div>
            <br></br>

            <div className='wrongAnswer'>

                <h3>Incorrect Answers:</h3>

                {props.wrongAnswers.map(answer => {
                    const split = answer.split('$#')

                    return (
                        <div key={uuid()}>
                            <h4>{split[0]}</h4>
                            <h5>Correct:{split[1]}</h5>
                            <h5>You Answered:{split[2]}</h5>
                            <br></br>
                        </div>
                    )
                }
                )}
            </div>

            <br></br>

            <Button onClick={event => props.ReturnButton(event)}>
                Return To Menu
            </Button>

            <br></br>

        </div>
    )
}

export default ShowScore