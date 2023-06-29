import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Search from '../components/Search';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


function Brand(){

  const [brands, setBrand] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8080/brands").then((response) => {
      setBrand(response.data);
      console.log(response.data)
    });
  }, []);

  if (!brands) return (
    <Spinner animation="border" variant="dark" />
  )

  return(
    <>  
      <div>
        <Button variant="dark">브랜드 생성</Button>
        <Button variant="dark">브랜드 삭제</Button>
      </div>
      <div>
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th></th>
                <th>이름</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
            {brands.map((brand, index) => (
              <tr key={brand.id} onClick={() => { navigate('' + brand.id)}}>
                <td>{index + 1}</td>
                <td>{brand.name}</td>
                <td>{brand.description}</td>
              </tr>
              ))}
            </tbody>
          </Table>
      </div>

      <div>
        <Search/>
      </div>
  </>
  )
}

export default Brand;