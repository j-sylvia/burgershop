import { Outlet,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logoburger from '../images/burger-logo.png'
// import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasExample from "./Cart";

 function Layout({ cart, addToCart, ...props }){
    return(
        <>
        <Navbar data-bs-theme="dark" style={{position:'sticky',backgroundColor:'#40a8a8',fontSize:'1.3rem',fontWeight:'bold',height:'65px',fontFamily:'verdana'}} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img 
            alt="burgershop logo"
            src={Logoburger}
            width=''
            height='55px'
            />

          </Navbar.Brand>
          <div style={{float:'right'}}>
          <Nav className="me-auto">
          <Nav.Link as={Link} style={{marginRight:'30px'}} to="/">HOME</Nav.Link>

            <Nav.Link as={Link} style={{marginRight:'30px'}} to="/about">ABOUT US</Nav.Link>
           
            <Nav.Link as={Link} style={{marginRight:'30px'}} to="/our-menu">OUR MENU</Nav.Link>

            {/* <Nav.Link as={Link}>
              <OffCanvasExample />
      </Nav.Link> */}
          </Nav>
          </div>
        </Container>
      </Navbar>
      <Outlet></Outlet>
        </>
    )
 }
   
 export default Layout;
