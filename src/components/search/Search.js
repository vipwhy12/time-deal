import { useState, useEffect } from "react";
import SearchDisplay from "./SearchDisplay";
import Filters from "./Filters";

function Search({ brands }) {
  const [userInput, setUserInput] = useState(null);
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    if (brands) {
      setBrand(brands);
    }
  }, [brands]);

  return (
    <article className="search">
      <Filters setUserInput={setUserInput} />
      <SearchDisplay
        brands={brands}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </article>
  );
}

export default Search;
