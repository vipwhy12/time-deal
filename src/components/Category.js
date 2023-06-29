import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Category(props) {

  if (!props.rootCategory){
    return ( <div>로딩중…</div>)
  } 

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          {
            props.rootCategory.map((category) => {
              return(
                <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey={category.id}>{category.name}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey={category.id}>
                      {
                        category.children.map((childCategory)=> {
                          return(
                            <>
                              <Card>
                              <Card.Body>{childCategory.name}</Card.Body>
                              </Card>
                            </>
                          )}
                        )
                      }
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              </Row>
              )
            })
          }
      </Tab.Container>

    </div>

  );
}

export default Category;