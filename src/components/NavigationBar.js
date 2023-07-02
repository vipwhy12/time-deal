import {Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function NavigationBar(){
  const navigate = useNavigate()

  return(
    <>
    <Navbar bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => {navigate('')}}>NoTag</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/brands')}}>Brand</Nav.Link>
          <Nav.Link onClick={() => {navigate('/products')}}>Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}