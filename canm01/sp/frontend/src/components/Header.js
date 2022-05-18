import React from 'react'
import {Navbar,Nav,Container,NavDropdown,Image,Button} from 'react-bootstrap';

export default () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="/">Vše food delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/nabidka-restauraci">Nabídka restaurací</Nav.Link>
            <Nav.Link href="/dokoncit-objednavku">Košík</Nav.Link>

            {/* Logged in: */}
            <NavDropdown title="Účet" id="basic-nav-dropdown">
                <NavDropdown.Item href="/muj-ucet">Můj účet</NavDropdown.Item>
                <NavDropdown.Item href="/muj-ucet/objednavky">Moje objednávky</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Odhlásit se</NavDropdown.Item>
            </NavDropdown>

            {/* Not logged in: */}
            <Nav.Link href="/login">Přihlásit se</Nav.Link>
            <Nav.Link href="/registrovat">Registrovat se</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
