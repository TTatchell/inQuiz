import { useState } from 'react'
import QuestionRender from './QuestionRender'

const TestApi = () => {

    const [question, setQuestion] = useState([]);

    const handleClick = async () => {
        const URL = 'https://opentdb.com/api.php?amount=10&category=21&type=multiple'
        const response = await fetch(URL)
        const questions = await response.json()
        setQuestion(questions.results)
        console.log('Response:', response)
        console.log('Questions:', questions.results)

        console.log(`Array length = ${questions.results.length}`)


        for (let index = 0; index < questions.results.length; index++) {
            console.log('test loop', index);
        }


    }

    // useEffect(() => {
    //     console.log('state update', question)
    // })

    return (
        <div>
            <button onClick={event => handleClick(event)}>
                Click me to get example package
            </button>






            {question.map(pack => < QuestionRender questionProp={pack}/>)}
        </div>
    )
}

export default TestApi