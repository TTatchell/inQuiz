import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { categoryArray, valueArray } from '../Data/QuizCategories'
import { QuestionFetch } from './QuestionFetch'
import QuestionRender from './QuestionRender'
import ShowScore from './ShowScore'

const Quiz = () => {

    const [display, setDisplay] = useState('start')
    const [category, setCategory] = useState('any')
    const [questions, setQuestions] = useState({})
    const [questionIndex, setQuestionIndex] = useState(-1)
    const [answerArray, setAnswerArray] = useState([])
    const [score, setScore] = useState(0)

    const handleBegin = async () => {
        setDisplay('loading')
        setQuestions(await QuestionFetch(category))
        setQuestionIndex(0)
        setDisplay('questionRender')
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const incrementIndex = async () => {
        if (questionIndex < 10) {
            setQuestionIndex(questionIndex + 1)
        }
    }

    const incrementScore = () => {
        console.log('correct!')
        setScore(score + 1)
    }

    //Thanks to javascriopt.info for the Fisher-Yates shuffle.
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }




    const handleReturnToMenu = () => {

        ////////////////////THIS IS WHERE SCORE WILL BE PUSHED//////////////////////////////////
        setDisplay('start')
        setQuestionIndex(0)
        console.log('clearing score')
        setScore(0)
    }

    const handleFinished = () => {
        setDisplay('showScore')
    }



    useEffect(() => {

        if (questionIndex === 10) {
            handleFinished()
        }
        else if (questionIndex >= 0 && questionIndex <= 9) {
            setAnswerArray(shuffle([questions[questionIndex]['correct_answer'], ...questions[questionIndex]['incorrect_answers']]))

        }


    }, [questionIndex])


    switch (display) {
        case 'start':
            return (
                <div className='quizContainer'>
                    <h1>Select A Quiz</h1>
                    <form>
                        <label htmlFor="categories">Choose A Topic:</label>

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

                    <button onClick={event => handleBegin(event)}>BEGIN</button>

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
                    />

                    {/* <button onClick={event => incrementIndex(event)}>Next</button> */}

                </div>
            )

        case 'showScore':
            return (
                <div>
                    < ShowScore  
                    ReturnButton={handleReturnToMenu}
                    score={score}
                    
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