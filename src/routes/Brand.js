import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Brand(){
  let[brand] = useState(["키르시", "칼하트", "커버낫"])
  return(
    <div>
      <h1>브랜드 검색</h1>
      <input type='text' placeholder='브랜드명을 작성해주세요' onChange={(e) => {console.log(e.target.value)}}/>
      <Button variant="dark" onClick={()=>{}}>검색</Button>
      <select></select>
    
      <div className='brand-rank'>
        <h2> 브랜드 판매 순위 </h2>
          {
            brand.map(function(a, index){
              return(
                <div className='brand-rank__name' key={index}>
                  <h3> {index + 1}. {brand[index]} </h3>
                </div>
              )
            })
          }
      </div>
    </div>

  )
}

export default Brand;