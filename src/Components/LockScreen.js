import { Button, Image, Form } from 'react-bootstrap'
import logo from '../images/cropped.png'


const LockScreen = (props) => {

    const handleChange = (event) => {
        props.updateUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        props.submitUsername()
    }



    return (
        <div>
            <Image
                src={logo}
                id='lockedLogo'
                >

                </Image>
            <Form >
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                    padding='2rem'
                    type='text'
                    placeholder='Type Away'
                    onChange={event => handleChange(event)}
                ></Form.Control>
            </Form>
            <br></br>

            <Button
                block
                size="lg"
                variant='primary'
                onClick={event => handleSubmit(event)}>Log In
            </Button>
        </div>
    )
}

export default LockScreen