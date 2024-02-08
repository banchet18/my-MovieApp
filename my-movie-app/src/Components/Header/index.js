import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderComponent = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>My Entertainment</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
    </header>
  );
};
export default HeaderComponent;
