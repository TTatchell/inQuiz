import { useEffect, useState } from 'react'
import { decode } from 'he'
import uuid from 'react-uuid'

const QuestionRender = (props) => {

    const answerArray = [props.questionProp.correct_answer, ...props.questionProp.incorrect_answers]



    //Thanks to javascriopt.info for the Fisher-Yates shuffle.
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log(array)
    }




    useEffect(() => {
        console.log('Updating QuestionRender once')
        shuffle(answerArray)
        console.log(shuffle)
    }, [])






    return (
        <div>
            <h1>{decode(props.questionProp.question)}</h1>

            {answerArray.map(answer => <h2 key={uuid()}>{decode(answer)}</h2>)}

        </div>

    )
}

export default QuestionRender