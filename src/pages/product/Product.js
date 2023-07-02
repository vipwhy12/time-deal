import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

export default function Product(){
  const {id} = useParams();
  const [product, setProduct] = useState(null)
  const [brand, setBrand] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/products/" + id).then((response) => {
      setProduct(response.data);
      setBrand(response.data.brand)
    });
  }, []);

  if (!product && !brand) return (
    <Spinner animation="border" variant="dark" />
  )

  return(
    <>
    <h1>{product.name}</h1>
    <h1>{brand.name}</h1>
    </>
  )

}