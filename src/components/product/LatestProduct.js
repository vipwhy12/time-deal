import { useNavigate } from "react-router-dom";

export default function LatesProducts({products}){
  const navigate = useNavigate()

  return(
    <article>
      <h3>최신 상품</h3>
      <div>
        {products.map(({id, name}, index)=>{
            return(
                <div key={id}>
                  <h5>{index + 1}. {name}</h5>
                </div>
              )
            })
          }
      </div>
    </article>
  )
}