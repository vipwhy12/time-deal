import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
export default function BrandList({brands}){
  const navigate = useNavigate()

  return(
    <main>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>이름</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {brands.map(({id, name, description}, index) => (
            <tr key={id} onClick={() => { navigate('' + id)}}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  </main>
  )

}