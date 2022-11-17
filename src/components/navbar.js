import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(<div>
       <Navbar bg="primary" variant="dark">
        
          <Navbar.Brand href="#home">House of Metazord</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/studentlist">Student Information</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>           
          </Nav>
        
      </Navbar>  

    </div> );
}

export default Header;