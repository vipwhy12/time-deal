import { useState } from 'react';

export default function Rank(){
  let[brand] = useState(["키르시", "칼하트", "커버낫"])
  return(
    <div className='brand-rank'>
        실시간 브랜드 판매 순위
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
  )
}
