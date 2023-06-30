import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export default function Category(){
  const location = useLocation();
  const category = location.state.category;
  console.log(category)
  let {id} = useParams();
  const [products, setProduct] = useState(null)


  useEffect(() => {
    axios.get("http://localhost:8080/category/childrenProduct/" + id).then((response)=> {
      setProduct(response.data);
      console.log(response.data)
    })
  }, []);

  if(!products){
    return( <Spinner animation="border" variant="dark" />)
  }

  return(
    <>
    <h1>{category.name}</h1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>상품명</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
        products.map((product, index) => {
          return(
            <>
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            </>
          )}
        )
        }
      </tbody>
    </Table>


    </>
  )

}
