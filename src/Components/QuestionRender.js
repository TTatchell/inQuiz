import { useEffect } from 'react'
import { decode } from 'he'

const QuestionRender = (props) => {

    useEffect(() => {
        console.log('running question render', props.questionProp)
    })

    return (
        <h1>{decode(props.questionProp.question)}</h1>
    )
}

export default QuestionRender