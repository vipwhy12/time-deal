import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "./search/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function NavigationBar() {
  const URL = "http://localhost:8080/";
  const navigate = useNavigate();
  const [brands, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBrand = async () => {
      try {
        const brandResponse = await axios.get(URL + "brands");
        setBrand(brandResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("err : ", error.message);
      }
    };

    loadBrand();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("");
            }}
          >
            NoTag
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/brands");
              }}
            >
              Brand
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/products");
              }}
            >
              Product
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/sales");
              }}
            >
              Sales
            </Nav.Link>
          </Nav>
          <Search brands={brands} />
        </Container>
      </Navbar>
    </>
  );
}
