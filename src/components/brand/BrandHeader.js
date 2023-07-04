import { Col, Row, Image, Button } from "react-bootstrap";

export default function BrandHeader({ brand }) {
  const img =
    "https://static.wixstatic.com/media/a442d9_1a2ce063dbe94e7e91cd43e4dd22088d~mv2.jpg/v1/fit/w_2500,h_1330,al_c/a442d9_1a2ce063dbe94e7e91cd43e4dd22088d~mv2.jpg";

  return (
    <Row style={{ height: "30vh" }}>
      <Col
        xs={2}
        className="justify-content-center align-items-center"
        style={{ display: "flex" }}
      >
        <div>
          <Image
            src={img}
            roundedCircle
            style={{ width: "100%", zIndex: "3" }}
          ></Image>
        </div>
      </Col>

      <Col xs={7} className="align-items-center" style={{ display: "flex" }}>
        <div
          className=""
          style={{ background: "", display: "flex", flexDirection: "column" }}
        >
          <h1>{brand.name}</h1>
          <span>{brand.description}</span>
        </div>
      </Col>

      <Col className="d-flex flex-row align-items-center">
        <div style={{ width: "100%" }}>
          <div className="d-flex flex-column gap-3 justify-content-center">
            <Button variant="dark" size="lg" style={{ width: "100%" }}>
              브랜드 수정
            </Button>
            <Button variant="dark" size="lg" style={{ width: "100%" }}>
              브랜드 삭제
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
