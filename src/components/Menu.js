import {Container, Nav, Navbar} from 'react-bootstrap';

function Menu(){
  return(
    <div className='nav-bar'>
    <Navbar bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">NoTag</Navbar.Brand>
      </Container>
    </Navbar>
  </div>
  )
}


export default Menu;