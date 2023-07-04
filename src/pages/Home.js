import React, {useEffect, useState}  from "react";
import axios from 'axios';
import LatestBrand from '../components/brand/LatestBrand'
import CategoryComponent from "../components/category/CategoryComponent";


export default function Home(){
  const [brands, setBrand] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);

  useEffect(() => {
      axios.get("http://localhost:8080/brands/new").then((response) => {
        setBrand(response.data);
        console.log("🚀🚀SET New Brand")
        console.log(response.data)
      });

      axios.get("http://localhost:8080/category/root").then((response) =>{
        setRootCategory(response.data);
        console.log("🚀🚀SET Root")
        console.log(response.data)
      });
  }, []);

  if (!brands && !rootCategory) return (
      <div>로딩중…</div>
  )

  return(
    <main>
      <LatestBrand brands={brands}/>
      <CategoryComponent rootCategory={rootCategory}/>
    </main>
  )
}
