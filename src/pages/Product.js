import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


export default function Product(){
  const [products, setProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setProduct(response.data);
      console.log(response.data)
    });
  }, []);


  if (!products) return (
    <Spinner animation="border" variant="dark" />
  )

  return(
    <>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>상품</th>
          <th>브랜드</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return(
            <tr key={product.id} onClick={() => { navigate('/products/' + product.id) }}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.brand.name}</td>
            <td>{product.category[0].name}</td>
          </tr>
          )
          })}
      </tbody>
    </Table>

    </>
  )
}