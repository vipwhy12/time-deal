import {Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Search from './search/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NavigationBar(){
  const navigate = useNavigate()
  const [brands, setBrand] = useState(null);

  useEffect(() => {
      axios.get("http://localhost:8080/brands").then((response) => {
        setBrand(response.data);
        console.log("🚀🚀SET SearchBrand")
        console.log(response.data)
      });
  }, []);

  return(
    <>
    <Navbar bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => {navigate('')}}>NoTag</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/brands')}}>Brand</Nav.Link>
          <Nav.Link onClick={() => {navigate('/products')}}>Product</Nav.Link>
        </Nav>
        <Search brands={brands}/>
      </Container>
    </Navbar>
    </>
  )
}