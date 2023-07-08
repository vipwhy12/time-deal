import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

export default function LatestData({ data, title, url }) {
  const navigate = useNavigate();
  const move = (moveData) => {
    navigate(url + moveData.id);
  };

  return (
    <Card style={{ width: "49%" }}>
      <Card.Header>{title}</Card.Header>
      <ListGroup variant="flush">
        {data.map(({ id, name }, index) => {
          return (
            <ListGroup.Item
              key={id}
              onClick={() => {
                move({ id });
              }}
            >
              {index + 1}. {name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}
