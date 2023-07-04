import { useNavigate } from "react-router-dom";

export default function LatestBrand({brands}){
  const navigate = useNavigate()

  return(
    <article>
      <h3>최신 브랜드</h3>
      <div>
        {brands.map(({id, name}, index)=>{
            return(
                <div key={id} onClick={() => {navigate('/brands/' + id)}}>
                  <h5>{index + 1}. {name}</h5>
                </div>
              )
            })
          }
      </div>
    </article>
  )
}