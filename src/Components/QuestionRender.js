import { useEffect, useState } from 'react'

const QuestionRender = (props) => {

    useEffect(() => {
        console.log('running question render', props.questionProp)
    })

    return (
        <h1>{props.questionProp.question}</h1>
    )
}

export default QuestionRender