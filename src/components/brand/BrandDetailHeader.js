import {Col, Row, Image, Button} from "react-bootstrap";

export default function BrandDetailHeader({brand}){
  return(
    <Row style={{height: "30vh"}}>
      <Col xs={2} className="justify-content-center align-items-center" style={{display: "flex"}}>
        <div><Image src='https://i.namu.wiki/i/Po1Av_7BeY1-tSa_OpHQjZvuc-bDa45vrqO_Ci8uLLFn2R7yRLJZcYHVFwwwcm2_BGPPdPMNQRX69xgW809nrmb3jObCRqlREtudg9sg8MsJSBxlJ3AzkbYUVIxrbHnaSzwOgB-c7jJEjmxp66sc_g.webp' roundedCircle style={{width: "100%", zIndex: "3"}}></Image></div>
      </Col>

      <Col xs={7} className="align-items-center" style={{display: "flex"}}>
        <div className="" style={{background: "", display: "flex", flexDirection: "column"}}>
          <h1>{brand.name}</h1>
          <span>{brand.description}</span>
        </div>
      </Col>

      <Col className="d-flex flex-row align-items-center">
        <div style={{width: "100%"}}>
            <div className="d-flex flex-column gap-3 justify-content-center">
                <Button variant="dark" size="lg" style={{width: "100%"}}>브랜드 수정</Button>
                <Button variant="dark" size="lg" style={{width: "100%"}}>브랜드 삭제</Button>
            </div>
        </div>
      </Col>

    </Row>
  )
}