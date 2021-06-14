import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import logo from '../images/cropped.png'

const MenuBarOld = (props) => {
    return (


        <div className="menuBar">
            <button >Quiz</button>
            <button >Scores</button>
            <span>Signed In As {props.username}</span>
            <button >Log Out</button>

        </div>
    )
}





const MenuBar = (props) => {
    return (

        <Container>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src={logo}
                        width='100rem'>
                    </img>
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <Button onClick={() => props.handleQuizButton()} >Quiz</Button>
                    <Button onClick={() => props.handleScoreGraph()}>Scores</Button>
                </Nav>

                <Navbar.Text>Signed In As {props.username}</Navbar.Text>

                <Button onClick={() => props.handleLogOut()}>Log Out</Button>






            </Navbar>
        </Container >
    )
}

export default MenuBar