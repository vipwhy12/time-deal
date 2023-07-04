import BrandHeader from '../../components/brand/BrandHeader';
import ProductList from '../../components/product/ProductList';
import Loading from '../../components/Loading'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Brand(){
  const {id} = useParams();
  const [brand, setBrand] = useState(null)
  const [products, setProducts] = useState(null)


  useEffect(() => {
    axios.get("http://localhost:8080/brands/" + id).then(({data}) => {
      setBrand(data);
      setProducts(data.products);
    });
  }, []);

  if(!brand){
    return (<Loading />)
  }
  
  return (
    <>
      <header>
        <BrandHeader brand={brand} />
      </header>

      <main>
        <ProductList products={products} />
      </main>
    </>
  );
}

