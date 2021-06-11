const LockScreen = (props) => {

    const handleChange = (event) => {
        props.updateUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        props.submitUsername()
    }



    return (
        <div>
            <h1>ENTER NAME</h1>
            <input type='text' onChange={event => handleChange(event)}>
            </input>

            <button onClick={event => handleSubmit(event)}>
                Let's Go!
            </button>


        </div>
    )
}

export default LockScreen