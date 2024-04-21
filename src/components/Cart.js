import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
// import {addToCart} from './Menu'

function OffCanvasExample({ cart, addToCart, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2">
        <i className='fas fa-cart-plus'></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cart && cart.map(product => (
            <div key={product.id}>
              <h4>{product.name}</h4>
              <p>{product.rname}</p>
              {/* <Button onClick={() => addToCart(product)}>Add to cart</Button> */}
            </div>
          ))}
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
