import {BiSearchAlt} from "react-icons/bi";

function Search() {
  return (
    <>
      <div className='brand-search__title'> 어떤 브랜드를 찾으시나요?</div>
      <div className='brand-search-bar__border'>
        <div className='brand-search-bar'>
            <BiSearchAlt style={{flexShrink: '0', color: 'black', fontSize: '2.5rem'}}/>
              <input
                  placeholder='브랜드명을 작성해주세요'
                  onChange={(e) => {console.log(e.target.value)}}
                  style={{
                  lineHeight: '3rem',
                  border: "none",
                  fontSize: '1.8rem',
                  color: 'gray',
                  width: '100%',
                  outline: "none"
                    }}/>
                </div>
            </div>
    </>
  );
}

export default Search;