import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

export default function Rank({ rank }) {
  const navigate = useNavigate();
  const move = (id, name, total) => {
    navigate("sales/" + id.brandId, {
      state: {
        brandId: id.brandId,
        brandName: name.brandName,
        total: total.total,
      },
    });
  };

  return (
    <section>
      <Title>Rank</Title>
      <Card>
        <Card.Header>🏅브랜드 판매 순위🏅</Card.Header>
        <ListGroup variant="flush">
          {rank &&
            rank.map(({ brandId, brandName, total }, index) => {
              return (
                <ListGroup.Item
                  key={brandName}
                  onClick={() => {
                    move({ brandId }, { brandName }, { total });
                  }}
                >
                  <ItemCountainer>
                    <div>
                      {index + 1}위. {brandName}
                    </div>
                    <h6>판매량 : {total}</h6>
                  </ItemCountainer>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Card>
    </section>
  );
}

const Title = styled.h3`
  padding: 10px 0 0;
`;

const ItemCountainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
