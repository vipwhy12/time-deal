import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const img =
    "https://static.wixstatic.com/media/a442d9_1a2ce063dbe94e7e91cd43e4dd22088d~mv2.jpg/v1/fit/w_2500,h_1330,al_c/a442d9_1a2ce063dbe94e7e91cd43e4dd22088d~mv2.jpg";

  useEffect(() => {
    const loadData = async () => {
      await axios
        .get("http://localhost:8080/products/" + id)
        .then(({ data }) => {
          setProduct(data);
          axios
            .get(
              "http://localhost:8080/category/ancestors/" + data.category[0].id
            )
            .then(({ data }) => {
              setCategory(data);
              setLoading(false);
            });
        });
    };
    loadData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <ProductImage src={img} />
      <h1>{product.name}</h1>
      <ListGroup>
        <ListGroup.Item>👉 브랜드 : {product.brand.name}</ListGroup.Item>
        <ListGroup.Item>
          👉 카테고리 :{" "}
          {product.category.map(({ name }) => {
            return <> {name} ,</>;
          })}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;
