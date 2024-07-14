import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default MyNav;