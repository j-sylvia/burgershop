import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Image from 'react-bootstrap/Image';
import { Rating } from '@mui/material'
import Menuimg from '../images/menu-page.jpg'
import OffCanvasExample from './Cart';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import '../App.css';

const baseURL = "https://j-sylvia.github.io/api/db.json";

function Menu() {
  const [item, setItem] = useState(null);
  const [filteritem, setFilter] = useState([]);
  const [cart, setCart] = useState([]);

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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;

  }

  const shuffledData = shuffleArray(filteritem);

const addToCart = (product) => {
    setCart(prevCart=>[...prevCart, product]);
    console.log("Adding to cart:", product); 
    console.log("Adding to cart:", cart);
    alert("Item added to cart");
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };


  if (!item) return null;

  return (
    <>
    
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <Image
        src={Menuimg}
        style={{marginBottom: '30px',height: '360px',width: '100%',opacity: '0.6'}} fluid />
      <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',fontFamily:'sans-serif',fontWeight:'bold',fontSize:'3.2rem' }}>
        OUR MENU <br />

      </h1>
    </div>
    <OffCanvasExample cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
    <div className='container'>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <input type="text" className='form-control' name='name' placeholder='Search here...' onChange={Filter} />
        {shuffledData.map((product) => (
          <Col key={product.id}>
            <Card style={{width:'19rem', padding:'10px'}} className="card-hover">

              <Card.Img variant="top" src={product.imgdata} style={{height:'230px',marginBottom:'10px'}}/>
              
              <div className="price-rating d-flex justify-content-between">
                 Price : ₹ {product.price}
                 <Rating value={Number(product.rating)} />
                 </div>
           
              <Card.Body>
                <Card.Title><b>{product.name}</b> 
                </Card.Title>
                <Card.Text>
                
                ☞ <small>{product.overview}</small>
                  
                </Card.Text>
                <Button style={{marginBottom:'10px'}} onClick={() => addToCart(product)} variant="success">Add to cart</Button><br />
                
              </Card.Body>
              <small style={{color:'#807c7a'}}>{product.orders}</small>
            </Card>
          </Col>
        ))}

      </Row>
      
    
    </div>
    </>
  );
}

export default Menu;
