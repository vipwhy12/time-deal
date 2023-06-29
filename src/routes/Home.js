import React, {useEffect, useState}  from "react";
import axios from 'axios';
import Search from "../components/Search";
import Rank from "./Rank";
import Tabs from "../components/Tabs";


function Home(){
  const [brands, setBrand] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [categories, setCategory] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
      axios.get("http://localhost:8080/brands").then((response) => {
          setData(response.data);
          console.log(response.data)
      });

      axios.get("http://localhost:8080/category").then((response) =>{
        setCategory(response.data);
        console.log(response.data);
      })
  }, []);

  if (!data || !categories) return (
      <div>로딩중…</div>
  )

  return(
    <div>
      <div className='BrandSearch'>
        <Search></Search>
      </div>

      <div>
        <div className='category-bar'>
          <Tabs></Tabs>
        </div>
      </div>
    
      <div className='Rank'>
        <Rank></Rank>
      </div>
      
          <div>
              {data.map((brand) => (
                  <div key={brand.id}>
                      <h1>{brand.name}</h1>
                  </div>
              ))}
          </div>
      
    </div>
  )
}


export default Home;