import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

import BrandHeader from '../components/brand/BrandHeader';
import BrandList from '../components/brand/BrandList';


export default function Brand(){
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
    <>  
      <BrandHeader/>
      <BrandList brands={brands}/>
    </>
  )
}
