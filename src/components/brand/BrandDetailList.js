import Table from 'react-bootstrap/Table';
import { useParams, useNavigate } from 'react-router-dom';

export default function BrandDetailList({products}){
  const navigate = useNavigate()

  return(
    <Table striped bordered hover variant="dark" >
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
      products.map(({id, name}, index) => {
        return(
          <>
          <tr key={id} onClick={() => {navigate('/products/' + id)}}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          </>
        )}
      )
      }
    </tbody>
  </Table>
  )
}