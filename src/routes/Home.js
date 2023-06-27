import { Button, Container, Nav, Navbar, Card } from 'react-bootstrap';
import { useState } from 'react';

function Home(){

  let[category] = useState(["반팔", "긴팔", "바지", "화장품", "케이스"])

  return(
    <div>
      <h4>Category</h4> 
      <div className='category-bar'>
        {
          category.map(function(a, index){
            return(
              <Card className='category-bar__column'>
                <Card.Footer> {category[index]} </Card.Footer>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
export default Home;