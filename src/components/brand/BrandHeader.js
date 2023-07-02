import {Col, Row, Button} from "react-bootstrap";


export default function BrandHeader(){
  return(
    <Row>
      <Col className="justify-content-center align-items-center" style={{display: "flex"}}>
        <div className='brand-title'>Brand 전체 조회</div>
      </Col>
      <Col className='d-flex flex-row align-items-center'>
        <div style={{width: "100%"}}>
        <div className="d-flex flex-column gap-3 justify-content-center">
              <Button variant="dark">브랜드 생성</Button>
              <Button variant="dark">브랜드 삭제</Button>
          </div>
        </div>
      </Col>
  </Row>
  )
}