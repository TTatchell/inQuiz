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
        setQuestionIndex(questionIndex + 1)
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
        setQuestionIndex(0)
        setDisplay('start')
    }

    const handleFinished = () => {
        console.log('handlefinished running')
        setDisplay('showScore')
    }



    useEffect(() => {

        // if (questionIndex === 9) {
        //     setDisplay('showScore')
        // }

        if (questionIndex === -1) {
            console.log('good morning')
        }
        else if (questionIndex >= 0 && questionIndex <= 9) {
            console.log('every day im shufflin')
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
            if (questionIndex !== 9) {
                return (
                    <div>
                        <QuestionRender
                            incrementIndex={incrementIndex}
                            questionHeading={questions[questionIndex]['question']}
                            answerArray={answerArray}
                        />

                    </div>
                )
            }
            // else {

            // }
        case 'showScore':
            return (
                <div>
                    < ShowScore ReturnButton={handleReturnToMenu} />
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