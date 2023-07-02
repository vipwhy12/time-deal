import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import {Col, Row, Image, Button} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import BrandDetailHeader from '../components/brand/BrandDetailHeader';
import BrandDetailList from '../components/brand/BrandDetailList';

export default function BrandDetail(){
  const {id} = useParams();
  const navigate = useNavigate()

  const [brand, setBrand] = useState(null)
  const [products, setProducts] = useState(null)


  useEffect(() => {
    axios.get("http://localhost:8080/brands/" + id).then((response) => {
      setBrand(response.data);
      setProducts(response.data.products);
    });
  }, []);

  if (!brand) return (
    <Spinner animation="border" variant="dark" />
  )

  
  return (
    <>
      <BrandDetailHeader brand={brand}/>
      <BrandDetailList products={products}/>
    </>  
  )
}

