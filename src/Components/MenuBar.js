const MenuBar = (props) => {
    return (
        <div className="menuBar">
            <button>Quiz</button>
            <button>Scores</button>
            <span>Signed In As {props.username}</span>
            <button onClick={event => props.handleLogOut()}>Log Out</button>

        </div>
    )
}

export default MenuBar