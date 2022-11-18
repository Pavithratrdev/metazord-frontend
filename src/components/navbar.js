import {Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Header = (props) => {
    return(<div>
       <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='p-9'>
          <Navbar.Brand href="/"> <img src={logo} alt="logo" width="30" height="30" />{' '}House of Metazord</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/studentlist">Student Information</Nav.Link>
                <Nav.Link href="/tech">Technologies</Nav.Link>           
              </Nav>
            </Navbar.Collapse>
      </Navbar>  

    </div> );
}

export default Header;