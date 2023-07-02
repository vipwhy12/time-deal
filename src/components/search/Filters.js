
export default function Filters({setUserInput}){

  const getValue = (e) =>{
    setUserInput(e.target.value.toLowerCase());
    }

  return(
    <article>
      <input 
        placeholder='브랜드명을 작성해주세요' 
        onChange={ getValue }/>
    </article>
  )
}