import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Image from 'react-bootstrap/Image';
import Ratings from './Ratings';

const baseURL = "https://j-sylvia.github.io/api/db.json";

function Menu() {
  const [item, setItem] = useState(null);
  const [filteritem, setFilter] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then(res => {
        setItem(res.data);
        setFilter(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const Filter = (event) => {
    setFilter(item.filter(f => f.name.toLowerCase().includes(event.target.value.toLowerCase())));
  }


  if (!item) return null;

  return (
    <>
    <Image src="https://jthemes.net/themes/html/testo/files/images/menu-page.jpg" style={{marginBottom:'30px',height:'400px',width:'100%'}} fluid />
    <div className='container'>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <input type="text" className='form-control' name='name' placeholder='Search here...' onChange={Filter} />
        {filteritem.map((item) => (
          <Col key={item.id}>
            <Card style={{width: '19rem',padding:'10px'}}>
              <Card.Img variant="top" src={item.imgdata} style={{height:'230px',marginBottom:'10px'}}/>
              {/* <b style={{fontSize:'larger',color:'green'}}>₹: {item.price}</b> */}
              <div className="price-rating d-flex justify-content-between">
                 Price : ₹ {item.price}
                 <Ratings value={item.rating} />
                 
                </div>

              
              {/* <b>Restaurant: {item.rname}</b> */}
              <Card.Body>
                <Card.Title><b>{item.name}</b> 
                {/* <small style={{ fontSize: 15, color: "grey" }}>{item.rname}</small> */}
                </Card.Title>
                <Card.Text>
                
                ☞ <small>{item.overview}</small>
                  
                </Card.Text>
                <Button style={{ marginBottom: '10px' }} variant="success">Add to cart</Button><br />
                
              </Card.Body>
              <small style={{color:'#807c7a'}}>{item.orders}</small>
            </Card>
          </Col>
        ))}

      </Row>
    </div>
    </>
  );
}

export default Menu;
