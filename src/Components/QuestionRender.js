import { useState } from 'react'
import { decode } from 'he'
import uuid from 'react-uuid'
import { Form, Button } from 'react-bootstrap'

const QuestionRender = (props) => {

    const [selectedAnswer, setSelectedAnswer] = useState()

    const handleRadioChange = (event) => {
        setSelectedAnswer(event.target.value)
    }

    const handleSubmit = (event) => {
        if (selectedAnswer === props.correctAnswer) {
            props.incrementScore()
            props.addCorrectAnswer(`${decode(props.questionHeading)} $# ${props.correctAnswer}`)
        }
        else {
            props.addWrongAnswer(`${decode(props.questionHeading)} $# ${props.correctAnswer} $# ${selectedAnswer}`)
        }
        props.incrementIndex()
    }


    return (
        <div>
            <h2>{`Question ${props.questionIndex + 1}.`}</h2>
            <h1>{decode(props.questionHeading)}</h1>

            <Form >

                {props.answerArray.map(answer =>
                    <div key={uuid()} >

                        <input
                            className='multipleChoiceOption'
                            onChange={event => handleRadioChange(event)}
                            type='radio'
                            key={uuid()}
                            name='choice'
                            value={answer}
                            checked={selectedAnswer === answer}>

                        </input>
                        {' '}
                        {decode(answer)}

                        <br></br>
                    </div>



                )}

            </Form>


            <Button onClick={event => handleSubmit(event)}>Submit</Button>

        </div>

    )
}

export default QuestionRender