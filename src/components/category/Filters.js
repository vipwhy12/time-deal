export default function Filters({setSelectedCategory, category}){

  const getValue = (e) =>{
    setSelectedCategory(parseInt(e.target.value))
  }


  return(
    <select onChange={ getValue }>
      {
        category.map(({id, name}) =>{
          return (
            <option key={id} value={id}>
              {name}
            </option>
          )
        })
      }
    </select>
  )
}