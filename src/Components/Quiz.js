import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { categoryArray, valueArray } from '../Data/QuizCategories'
import { QuestionFetch } from './QuestionFetch'
import QuestionRender from './QuestionRender'
import ShowScore from './ShowScore'
import SendScore from './SendScore'
import { Button } from 'react-bootstrap'

const Quiz = (props) => {

    const [display, setDisplay] = useState('start')
    const [category, setCategory] = useState('9')
    const [questions, setQuestions] = useState({})
    const [questionIndex, setQuestionIndex] = useState(-1)
    const [answerArray, setAnswerArray] = useState([])
    const [score, setScore] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState([])
    const [wrongAnswers, setWrongAnswers] = useState([])

    const handleBegin = async () => {
        setDisplay('loading')
        setQuestions(await QuestionFetch(category))
        setQuestionIndex(0)
        setDisplay('questionRender')
    }

    const handleCategoryChange = (event) => { setCategory(event.target.value) }

    const incrementIndex = async () => {
        if (questionIndex < 10) {
            setQuestionIndex(questionIndex + 1)
        }
    }

    const incrementScore = () => {setScore(score + 1)}

    const addCorrectAnswer = (correctAnswer) => {setCorrectAnswers(correctAnswers => [...correctAnswers, correctAnswer])}

    const addWrongAnswer = (wrongAnswer) => {setWrongAnswers(correctAnswers => [...correctAnswers, wrongAnswer])}

    //Thanks to javascriopt.info for the Fisher-Yates shuffle.
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const handleReturnToMenu = () => {
        setDisplay('start')
        setQuestionIndex(0)
        setScore(0)
    }




    useEffect(() => {
        if (questionIndex === 10) {
            const pack = {
                Username: props.username,
                Score: score
            }
            SendScore(pack)
            setDisplay('showScore')
        }
        else if (questionIndex >= 0 && questionIndex <= 9) {
            setAnswerArray(shuffle([questions[questionIndex]['correct_answer'], ...questions[questionIndex]['incorrect_answers']]))
        }
    }, [questionIndex, questions, score, props.username])


    switch (display) {
        case 'start':
            return (
                <div className='quizContainer'>
                    <h1>Start A Quiz</h1>
                    <br></br>

                    <form>
                        <label htmlFor="categories" id='topicHeader'>Choose A Topic:</label> 
                        <br></br>

                        <select
                            name="categories"
                            id="categorySelect"
                            onChange={event => handleCategoryChange(event)}
                            value={category}
                        >
                            <option value='placeHolder' disabled hidden>Please Select One</option>
                            {categoryArray.map((optionN, index) => <option value={valueArray[index]} key={uuid()}>{optionN}</option>)}
                        </select>
                    </form>
                    <br></br>

                    <Button onClick={event => handleBegin(event)}>BEGIN</Button>
                    <br></br>
                    <br></br>

                </div>)

        case 'loading':
            return (
                <h1>LOADING</h1>
            )
        case 'questionRender':
            return (
                <div>
                    <QuestionRender
                        incrementIndex={incrementIndex}
                        questionIndex={questionIndex}
                        questionHeading={questions[questionIndex]['question']}
                        answerArray={answerArray}
                        incrementScore={incrementScore}
                        correctAnswer={questions[questionIndex]['correct_answer']}
                        addCorrectAnswer={addCorrectAnswer}
                        addWrongAnswer={addWrongAnswer}
                    />
                </div>
            )

        case 'showScore':
            return (
                <div>
                    < ShowScore
                        ReturnButton={handleReturnToMenu}
                        score={score}
                        correctAnswers={correctAnswers}
                        wrongAnswers={wrongAnswers}

                    />
                </div>
            )

        default:
            return (
                <div className='quizContainer'>
                    <h1>Invalid 'Display' State</h1>
                </div>
            )
    }
}

export default Quiz