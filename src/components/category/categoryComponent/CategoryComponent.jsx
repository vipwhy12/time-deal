import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function CategoryComponent({ rootCategory }) {
  const navigate = useNavigate();

  return (
    <>
      {rootCategory &&
        rootCategory.map(({ id, name, children }) => {
          return (
            <Card style={{ width: "30%" }}>
              <Card.Header>🏷 {name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item
                  key={id}
                  onClick={() => {
                    navigate("/category/" + id);
                  }}
                >
                  👀 전체보기
                </ListGroup.Item>
                {children.map(({ id, name }) => (
                  <ListGroup.Item
                    key={id}
                    onClick={() => {
                      navigate("/category/" + id);
                    }}
                  >
                    {name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          );
        })}
    </>
  );
}
