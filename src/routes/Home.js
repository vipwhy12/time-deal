import React, {useEffect, useState}  from "react";
import axios from 'axios';
import Search from "../components/Search";
import Category from "../components/Category"


function Home(){
  const [brands, setBrand] = useState(null);
  const [data, setData] = useState(null);
  const [rootCategory, setRootCategory] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
      axios.get("http://localhost:8080/brands").then((response) => {
          setData(response.data);
          console.log(response.data)
      });

      axios.get("http://localhost:8080/category/root").then((response) =>{
        setRootCategory(response.data);
        console.log(response.data);
      });

  }, []);

  if (!data && !rootCategory) return (
      <div>로딩중…</div>
  )

  return(
    <div>
      <div className='BrandSearch'>
        <Search></Search>
      </div>

      <div>
        <div className='category-bar'>
          <Category rootCategory={rootCategory}></Category>
        </div>
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


export default Home;