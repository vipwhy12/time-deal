import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

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

const Header = styled.header`
  padding: 20px;
`;

const ImageContainer = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  zindex: 3;
`;

const BrandContainer = styled.div`
  margin-top: 30px;
`;

export default BrandHeader;
