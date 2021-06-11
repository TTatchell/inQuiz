import { useState } from 'react'
import { decode } from 'he'
import uuid from 'react-uuid'

const QuestionRender = (props) => {

    const [selectedAnswer, setSelectedAnswer] = useState()

    const handleRadioChange = (event) => {
        setSelectedAnswer(event.target.value)
    }

    const handleSubmit = (event) => {
        if (selectedAnswer === props.correctAnswer) {
            props.incrementScore()
        }

        props.incrementIndex()


    }


    return (
        <div>
            <h2>{`Question ${props.questionIndex + 1}.`}</h2>
            <h1>{decode(props.questionHeading)}</h1>

            <div onChange={event=> handleRadioChange(event)}>


                {props.answerArray.map(answer =>
                    <div key={uuid()}>
                        <input
                            type='radio'
                            key={uuid()}
                            name='choice'
                            value={answer}

                        /> {decode(answer)}
                        <br></br>
                    </div>



                )}

            </div>


            <button onClick={event => handleSubmit(event)}>Submit</button>

        </div>

    )
}

export default QuestionRender