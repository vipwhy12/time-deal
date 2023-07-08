import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../pagination/Pagination";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

export default function BrandsList({ brands }) {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const offset = (page - 1) * limit;

  const move = (brand) => {
    navigate("" + brand.id);
  };

  return (
    <>
      <ListGroupContainer>
        <ListGroup as="ol">
          {brands
            .slice(offset, offset + limit)
            .map(({ id, name, description }, index) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                onClick={() => {
                  move({ id });
                }}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {index + offset + 1}. {name}
                  </div>
                  {description}
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </ListGroupContainer>

      <PaginationContainer>
        <Pagination
          total={brands.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </PaginationContainer>
    </>
  );
}

const ListGroupContainer = styled.div`
  cursor: pointer;
`;

const PaginationContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10%;
`;
