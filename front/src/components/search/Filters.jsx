import {Form} from 'react-bootstrap';

export default function Filters({setUserInput}){

  const getValue = (e) =>{
    setUserInput(e.target.value.toLowerCase());
    }

  return (
    <article>
      <Form.Control
        type="search"
        placeholder="Search Brands"
        className="me-2"
        aria-label="Search"
        onChange={getValue}
      />
    </article>
  );
}
