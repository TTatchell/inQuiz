import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { categoryArray, valueArray } from '../Data/QuizCategories'
import { QuestionFetch } from './QuestionFetch'
import QuestionRender from './QuestionRender'

const Quiz = () => {

    const [display, setDisplay] = useState('start')
    const [category, setCategory] = useState('any')
    const [questions, setQuestions] = useState({})

    const handleBegin = async () => {
        setDisplay('loading')
        setQuestions(await QuestionFetch(category))
        setDisplay('questionRender')

    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    useEffect(() => {
        console.log('Quiz.js Updated')
    })


    switch (display) {
        case 'start':
            return (
                <div className='quizContainer'>
                    <h1>Select A Quiz</h1>

                    <button onClick={event => handleBegin(event)}>BEGIN</button>

                    <form>
                        <label htmlFor="categories">Choose A Topic:</label>

                        <select
                            name="categories"
                            id="categorySelect"
                            onChange={event => handleCategoryChange(event)}
                            value={category}>
                            {/*<option value='' disabled selected hidden>Please Select One</option> */}
                            {categoryArray.map((optionN, index) => <option value={valueArray[index]} key={uuid()}>{optionN}</option>)}
                        </select>



                    </form>

                </div>)

        case 'loading':
            return (
                <h1>LOADING</h1>
            )
        case 'questionRender':
            return (
                <div>
                    <QuestionRender questionProp={questions[0]}/>
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