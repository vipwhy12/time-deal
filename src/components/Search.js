import { useState } from "react";
// import { Card } from "react-bootstrap";s
import {BiSearchAlt} from "react-icons/bi";

function Search(props) {
  const [userInput, setUserInput] = useState(null)
  const [brands, setBrands] = useState(props.brands)
  // const [search, setSearch] = useState(null)

  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  }

  const searched = brands.filter((brand) => {
    return brand.name.toLowerCase().includes(userInput)
  });

  if (!brands){
    return (
      <div>로딩중…</div>
  )
  } 

  return (
    <>
      <div className='brand-search__title'> 어떤 브랜드를 찾으시나요?</div>
      <div className='brand-search-bar__border'>
        <div className='brand-search-bar'>
            <BiSearchAlt style={{flexShrink: '0', color: 'black', fontSize: '2.5rem'}}/>
              <input
                  placeholder='브랜드명을 작성해주세요'
                  onChange={ getValue }
                  style={{
                  lineHeight: '3rem',
                  border: "none",
                  fontSize: '1.8rem',
                  color: 'gray',
                  width: '100%',
                  outline: "none"
                    }}/>
                
          </div>
          <div>
          {
            searched.map(brand => <div>{brand.name}</div>)
          }
            
          </div>

          </div>
    

    
    </>
  );
}

export default Search;