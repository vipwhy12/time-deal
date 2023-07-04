import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
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

  if (!brand) {
    return <div>로딩중…</div>;
  } 

  return (
    <article className="search">
      <Filters setUserInput={setUserInput}/>
      <SearchDisplay brands={brands} userInput={userInput}/>
      <Button variant="outline-light">Search</Button>
    </article>
  );
}



export default Search;