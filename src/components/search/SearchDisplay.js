export default function SearchDisplay({brands, userInput}){

  const searched = brands.filter(({id, name}) => {
    return name.toLowerCase().includes(userInput)
  });
  
  return(
    <>
      { searched.map(({id, name}) => <div key={id}>{name}</div>) }
    </>
  )
}