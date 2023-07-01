import React, {useEffect, useState}  from "react";
import axios from 'axios';
import Search from "../components/Search";
import Tabs from "../components/Tabs";
import Rank from "./Rank";


export default function Home(){
  const [brands, setBrand] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
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
    <div>
      <div className='brand-search'>
        <Search brands={brands}></Search>
      </div>

      <div className='category-bar'>
        <Tabs rootCategory={rootCategory}></Tabs>
      </div>


      <div>
        <Rank></Rank>
      </div>
    
      {/* <div className='Rank'>
        <Rank></Rank>
      </div>

          <div>
              {data.map((brand) => (
                  <div key={brand.id}>
                      <h1>{brand.name}</h1>
                  </div>
              ))}
          </div> */}
      
    </div>
  )
}
