import {Container, Nav, Navbar} from 'react-bootstrap';

function Menu(){
  return(
    <>
    <div className='nav-bar'>
    <Navbar bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">NoTag</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/brands">Brand</Nav.Link>
          <Nav.Link href="/products">Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
    </>
  )
}


export default Menu;