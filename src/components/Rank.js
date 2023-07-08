import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

export default function Rank({ rank }) {
  const navigate = useNavigate();
  const move = (data) => {
    navigate("/sales/brands/" + data.brandId);
  };

  return (
    <Card>
      <Card.Header>🔥브랜드 판매 순위🔥</Card.Header>
      <ListGroup variant="flush">
        {rank &&
          rank.map(({ brandId, brandName, total }, index) => {
            return (
              <ListGroup.Item
                key={brandName}
                onClick={() => {
                  move({ brandId });
                }}
              >
                <ItemCountainer>
                  <div>
                    {index + 1}. {brandName}
                  </div>
                  <div>판매량 : {total}</div>
                </ItemCountainer>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
}

const ItemCountainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
