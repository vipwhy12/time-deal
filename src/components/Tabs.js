import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useNavigate } from 'react-router-dom';

function Tabs(props) {
  const navigate = useNavigate()

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
                              <Card 
                                key={childCategory.id} 
                                onClick={()=>{ navigate('category/' + childCategory.id, {state: { category: childCategory} })}}>
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

export default Tabs;