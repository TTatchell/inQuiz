import { Button, Alert} from 'react-bootstrap'

const LockScreen = (props) => {

    const handleChange = (event) => {
        props.updateUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        props.submitUsername()
    }



    return (
        <div>
            <Alert variant='primary'>ENTER NAME</Alert>
            <input type='text' onChange={event => handleChange(event)}>
            </input>

            <Button onClick={event => handleSubmit(event)}>test button</Button>
            


        </div>
    )
}

export default LockScreen