import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useState } from 'react';
import Pagination from '../pagination/Pagination';


export default function BrandsList({ brands }) {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const offset = (page - 1) * limit;

  return (
    <>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>이름</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {brands
            .slice(offset, offset + limit)
            .map(({ id, name, description }, index) => (
            <tr
              key={id}
              onClick={() => {
                navigate("" + id);
              }}
            >
              <td>{index + offset + 1}</td>
              <td>{name}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <footer>
        <Pagination
          total={brands.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
}
