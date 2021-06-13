


const MenuBar = (props) => {
    return (
        <div className="menuBar">
            <button onClick={() => props.handleQuizButton()}>Quiz</button>
            <button onClick={() => props.handleScoreGraph()}>Scores</button>
            <span>Signed In As {props.username}</span>
            <button onClick={() => props.handleLogOut()}>Log Out</button>

        </div>
    )
}

export default MenuBar