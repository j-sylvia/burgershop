import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
// import {addToCart} from './Menu'

function OffCanvasExample({ cart, addToCart,removeFromCart, ...props }) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calculateTotal = () => {
    return cart.reduce((total, currentItem) => {
      const itemPrice = currentItem.price || 0;
      return total + itemPrice;
    }, 0);
  }
  const totalPrice = calculateTotal();

  return (
    <>
      <Button variant="dark" style={{margin:'12px auto',width:'118px'}} onClick={handleShow} className="me-2 fixed-top">
        <i className='fas fa-cart-plus'> View Cart</i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cart && cart.map(product => (
            <div style={{backgroundColor:'#40a8a8',padding:'20px',marginBottom:'10px',border:'1px solid black'}} key={product.id}>
            <img src={product.imgdata} alt={'images'} style={{float:'right',height:'80px',width:'100px'}}/>
              <h4>{product.name}</h4> 
              <b>Restaurant: {product.rname}</b>
              <h6>Ratings: {product.rating}</h6>
              <h5>Price : ₹ {product.price}</h5>
              <Button variant='dark' onClick={() => removeFromCart(product.id)} style={{float:'right',marginTop:'-25px'}}>Remove</Button>
            </div>
          ))}
          <h3 style={{color:'darkgreen',textAlign:'center'}}>Total Price: {totalPrice}</h3>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// function Example() {
//   return (
//     <>
//       {['end'].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

export default OffCanvasExample;
