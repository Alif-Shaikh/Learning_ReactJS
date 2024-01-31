import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function NavbarComponent(props) {
    // function NavbarComponent({title}) {
  return (
    <Navbar expand="lg" classNameName="bg-info text-white">
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand> 
        {/* <Navbar.Brand href="#home">{title}</Navbar.Brand>   */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classNameName="me-auto">
            <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/about">        
               <Nav.Link href="#link">About</Nav.Link>
            </Link>
 
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link to ="contact"><NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;