import Pagination from '../pagination/Pagination';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function ProductList({products}){
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const offset = (page - 1) * limit;


  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>상품명</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody>
          {products
            .slice(offset, offset + limit)
            .map(({ id, name, createdAt }, index) => {
              return (
                <tr
                  key={id}
                  onClick={() => {
                    navigate("/products/" + id);
                  }}
                >
                  <td>{index + offset + 1}</td>
                  <td>{name}</td>
                  <td>{createdAt}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <footer>
        <Pagination
          total={products.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
}