import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Header = (props) => {
    return(<div>
       <Navbar bg="primary" variant="dark">
        
          <Navbar.Brand href="/"> <img src={logo} alt="logo" width="30" height="30" />{' '}House of Metazord</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/studentlist">Student Information</Nav.Link>
            <Nav.Link href="/tech">Technologies</Nav.Link>           
          </Nav>
        
      </Navbar>  

    </div> );
}

export default Header;