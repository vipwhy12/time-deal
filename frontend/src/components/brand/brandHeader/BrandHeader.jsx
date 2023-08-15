import React from "react";
import { Col, Row } from "react-bootstrap";
import { Header, ImageContainer, BrandContainer } from "./style";

const BrandHeader = ({ brand }) => {
  const img =
    "https://static.wixstatic.com/media/a442d9_1a2ce063dbe94e7e91cd43e4dd22088d~mv2.jpg/v1/fit/w_2500,h_1330,al_c/a442d9_1a2ce063dbe94e7e91cd43e4dd22088d~mv2.jpg";

  return (
    <Header>
      <Row>
        <Col xs={3}>
          <ImageContainer src={img} />
        </Col>

        <Col xs={5}>
          <BrandContainer>
            <h1>{brand.name}</h1>
            <span>{brand.description}</span>
          </BrandContainer>
        </Col>
      </Row>
    </Header>
  );
};

export default BrandHeader;
