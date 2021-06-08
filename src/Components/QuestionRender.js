import { useEffect, useState } from 'react'
import { decode } from 'he'

const QuestionRender = (props) => {

    const answerArray = [props.questionProp.correct_answer, ...props.questionProp.incorrect_answers]

    useEffect(() => {
        console.log('QuestionRender.js updated')
        console.log(answerArray)
    })

    
    

    

    return (
        <div>
            <h1>{decode(props.questionProp.question)}</h1>

            {answerArray.map(answer => <h2>{answer}</h2>)}

        </div>

    )
}

export default QuestionRender