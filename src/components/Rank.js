export default function Rank({rank}){

  return(
    <>
      {rank && rank.map(({brandName, total}, index) => {
        return (
          <div key={brandName}>
            {brandName}
            {total}
          </div>
        )
      })}
    </>
  )
}
