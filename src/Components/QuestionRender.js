//import { useEffect } from 'react'
import { decode } from 'he'
import uuid from 'react-uuid'

const QuestionRender = (props) => { 

    const handleSubmit = (event) => {
        props.incrementIndex()
    }


    return (
        <div>

            <h1>{decode(props.questionHeading)}</h1>

            {props.answerArray.map(answer => <h2 key={uuid()}>{decode(answer)}</h2>)}

            <button onClick={event => handleSubmit(event)}>Submit</button>

        </div>

    )
}

export default QuestionRender