import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from "./routes/home";

export default function App() {
  return (
  
    <div>

      <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                <Nav.Link as={NavLink} to="/home" >Home</Nav.Link>
                <Nav.Link as={NavLink} to="/expenses">Expenses</Nav.Link>
                <Nav.Link as={NavLink} to="/invoices">Invoices</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
      <Outlet />
      </div>

  );
}