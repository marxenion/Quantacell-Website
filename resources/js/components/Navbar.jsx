// import '../components/css/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
//import InputGroup from 'react-bootstrap/InputGroup';
import logoo1 from '../components/Images/logoo2.png';
import Image from 'react-bootstrap/Image';
import '../../css/navbar.css';
// import Link from "react-router-dom";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <login />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Navbarr() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" id="nav-cont" className='h-navbar'>
      <Container>
        <Navbar.Brand href="/">
            <Image className="logo" src={logoo1} responsive/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="nav-list">
            <a href="/" className='navlinkk'>Home</a>
            <a href="/client" className='navlinkk'>Find Talents</a>
            <a href = "/talent" className='navlinkk'>Join our Team</a>
            <a href ="/aboutus" className='navlinkk'>About Us</a>
          
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
{/* 
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>*/}
       

        {/* <Form className="d-flex">y
            <Form.Control
              type="search"
              placeholder="Search for Services/Talents "
              className="me-2" 
              id="searchbar"
              aria-label="Search"
           /> 
            <Button variant="outline-secondary" className="searchbtn">Search</Button> 
          </Form> */}

      {/* <Button variant="light" className='signInBtn'>Sign In</Button> */}
      {/* <Button variant="light" className='joinBtn'>Join</Button> */}

    <>
    
      <Button  variant="light" className='signInBtn' id='signinbtn'>
          <i class="fa fa-user"></i> <a href = "/login"> Log in </a>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>




 </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default Navbarr;

// if (document.getElementById('navbarrr')) {
//   ReactDOM.render(<Navbarr />, document.getElementById('navbarrr'));
// }