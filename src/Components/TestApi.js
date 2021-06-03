import { useEffect, useState } from 'react'
import QuestionRender from './QuestionRender'

const TestApi = () => {

    const [question, setQuestion] = useState(['nothing', 'hey']);

    const handleClick = async () => {
        const URL = 'https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=base64'

        const response = await fetch(URL)

        const questions = await response.json()

        setQuestion(questions.results)
        console.log('Response:', response)
        console.log('Questions:', questions.results)
        
    }

    // useEffect(() => {
    //     console.log('state update', question)
    // })

    return (
        <div>
            <button onClick={event=> handleClick(event)}>
                Click me to get example package 
            </button>
            {question.map(pack => < QuestionRender questionProp={pack}/>)}
        </div>
    )
}

export default TestApi