import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {Col, Row} from "react-bootstrap";

export default function Brand(){
  const navigate = useNavigate()
  const [brands, setBrand] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/brands").then((response) => {
      setBrand(response.data);
      console.log("🚀🚀SET Brand")
      console.log(response.data)
    });
  }, []);

  if (!brands) return (
    <Spinner animation="border" variant="dark" />
  )

  return(
    <div className='brand'>  
      <Row>
        <Col className="justify-content-center align-items-center" style={{display: "flex"}}>
          <div className='brand-title'>Brand 전체 조회</div>
        </Col>
        <Col className='d-flex flex-row align-items-center'>
          <div style={{width: "100%"}}>
          <div className="d-flex flex-column gap-3 justify-content-center">
                <Button variant="dark">브랜드 생성</Button>
                <Button variant="dark">브랜드 삭제</Button>
            </div>
          </div>
        </Col>
      </Row>

      <div>
            <Table striped bordered hover size="sm" variant="dark">
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
  </div>
  )
}
