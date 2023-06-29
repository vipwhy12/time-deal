import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function BrandDetail(){
  let {id} = useParams();
  const [brand, setBrand] = useState(null)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/brands/" + id).then((response) => {
      setBrand(response.data);
      setProducts(response.data.products);
      console.log(response.data.products)
    });
  }, []);

  if (!brand) return (
    <Spinner animation="border" variant="dark" />
  )

  
  return (
    <>
    <h1>{brand.name}</h1>
    {
      products.map(product => {
        return(
          <>
          {product.id}
          {product.name}
          </>
        )

      }
        
        )
    }
    
    </>  
  )
}

export default BrandDetail;