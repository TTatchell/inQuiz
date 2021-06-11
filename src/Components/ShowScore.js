

const ShowScore = (props) => {
    return (
        <div>
            <h1>
                You Scored {props.score} out of 10!
            </h1>

            <button onClick={event => props.ReturnButton(event)}>
                Return To Menu
            </button>

        </div>
    )
}

export default ShowScore