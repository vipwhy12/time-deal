import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function NavigationBar() {
  const navigate = useNavigate();
  const [brands, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBrand = async () => {
      try {
        const brandResponse = await axios.get('http://localhost:8080/brands');
        setBrand(brandResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('err : ', error.message);
      }
    };

    loadBrand();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const move = (l) => {
    navigate('/brands', {
      state: {
        brands: brands,
      },
    });
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                move();
              }}
            >
              Brand
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/products');
              }}
            >
              Product
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/sales');
              }}
            >
              Sales
            </Nav.Link>
          </Nav> */}
          {/* <Search brands={brands} /> */}{' '}
          <Navbar.Brand
            onClick={() => {
              navigate('');
            }}
          >
            ⌚️TimeDeal
          </Navbar.Brand>
          <Button
            variant="dark"
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
