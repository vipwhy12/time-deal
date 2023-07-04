import BrandsHeader from '../../components/brand/BrandsHeader';
import BrandsList from '../../components/brand/BrandsList';
import Loading from '../../components/Loading'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Brands(){
  const [brands, setBrand] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/brands").then((response) => {
      setBrand(response.data);
      console.log("🚀🚀SET Brand")
      console.log(response.data)
    });
  }, []);

  if (!brands){
    return (<Loading />)
  }


  return(
    <>
      <header>
        <BrandsHeader />
      </header>  
      
      <main>
        <BrandsList brands={ brands } />
      </main>
    </>
  )
}
