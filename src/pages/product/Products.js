import ProductList from "../../components/product/ProductList";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!products) return <Spinner animation="border" variant="dark" />;

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
