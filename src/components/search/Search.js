import { useState, useEffect } from "react";
import {BiSearchAlt} from "react-icons/bi";
import SearchDisplay from "./SearchDisplay";
import Filters from "./Filters";

function Search({brands}) {
  const [userInput, setUserInput] = useState(null)
  const [brand, setBrand] = useState(null)

  useEffect(() => {
    if (brands) {
      setBrand(brands);
    }
  }, [brands]);

  if (!brand){
    return (
      <div>로딩중…</div>
    )
  } 

  return (
    <article className="search">
      <h2> 어떤 브랜드를 찾으시나요?</h2>
        <Filters setUserInput={setUserInput}/>
        <SearchDisplay brands={brands} userInput={userInput}/>
    </article>
  );
}



export default Search;