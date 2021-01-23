import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const TemplateHeader = ({
  sellerName = "EBAY-SHOP",
  navLinks = [
    { href: "#home", text: "Home" },
    { href: "#link", text: "Link" },
  ],
}) => {
  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">{sellerName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              {navLinks.map(({ href, text }, i) => {
                return (
                  <Nav.Link href={href} active>
                    {text}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TemplateHeader;
