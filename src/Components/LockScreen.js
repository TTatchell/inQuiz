const LockScreen = (props) => {

    

    return (
        <div>
            <div>
                <button onClick={event=>props.handleLoginClick()}>Login</button>
            </div>
            <div>
                <button onClick={event=>props.handleCreateClick()}>Create New User</button>
            </div>
        </div>
    )
}

export default LockScreen