

const ShowScore = (props) => {
    return (
        <div>
            <h1>
                This is your Score
            </h1>

            <button onClick={props.ReturnButton()}>
                Return To Menu
            </button>

        </div>
    )
}

export default ShowScore