import React, {useEffect, useState}  from "react";
import axios from 'axios';
import Search from "../components/search/Search";
import CategoryComponent from "../components/category/CategoryComponent";
import Rank from "./Rank";


export default function Home(){
  const [brands, setBrand] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);

  useEffect(() => {
      axios.get("http://localhost:8080/brands").then((response) => {
        setBrand(response.data);
        console.log("🚀🚀SET Brand")
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
      <Search brands={brands}/>
      <CategoryComponent rootCategory={rootCategory}/>
      {/* <Rank/> */}
    </main>
  )
}
