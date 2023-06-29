import {BiSearchAlt} from "react-icons/bi";

function Search() {
  return (
    <>
      <div className='Search-title' style={{fontSize: "2rem", fontWeight: 700, textAlign: "center"}}> 어떤 브랜드를 찾으시나요?
      </div>
      <div style={{position:'relative',width:'46.1rem',height:'6.4rem',border:'0.6rem solid #c4c4c4',borderRadius:'8.4rem'}}>
        <div className='Search-bar'
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '1.7rem 3rem 1.7rem 2rem', gap: '1.5rem', width: '45rem', height: '5.4rem',borderRadius: '7.5rem', background: 'white', border: '0.2rem solid black'}}>
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