import { useState } from 'react'
//import QuestionRender from './QuestionRender'

const Quiz = () => {

    const [display, setDisplay] = useState('start')

    const handleBegin = () => {
        setDisplay('questionRender')
    }


    switch (display) {
        case 'start':
            return (
                <div className='quizContainer'>
                    <h1>Begin?</h1>
                    <button onClick={event=>handleBegin(event)}>BEGIN</button>
                </div>

            )

        case 'questionRender':
            return (
                <div>
                    Lessa go!
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