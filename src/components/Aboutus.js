import React from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImg from '../images/About-Us-burger.jpg'
import aboutMain from '../images/about-page.jpg'
// import '../App.css';

function Aboutus() {
  return (
    <>
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <Image
        src={aboutMain}
        style={{marginBottom: '50px',height: '360px',width: '100%',opacity: '0.7'}} fluid />
      <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',fontFamily:'sans-serif',fontWeight:'bold',fontSize:'3.2rem' }}>
        ABOUT US
      </h1>
    </div>
    <Container>
      <Row>
        <Col><img style={{height:'500px'}} src={aboutImg} alt="aboutus" /></Col>
        <Col style={{fontFamily:'verdana',textAlign:'justify'}}><h3>INDIA’S LARGEST HOME-GROWN BURGER CHAIN IS HERE TO SERVE YOU.</h3><p>We know you’re obviously a fan of desi flavours and have your heart set on it. Your search for the best Indian fusion burgers ends here. With the taste of India in every bite, we have thoughtfully curated our menu to serve the Indian palette. Bursting with flavours, our wide range of burgers will always make you crave for more. </p>
        <p>We know you’re obviously a fan of desi flavours and have your heart set on it. Your search for the best Indian fusion burgers ends here. With the taste of India in every bite, we have thoughtfully curated our menu to serve the Indian palette. Bursting with flavours, our wide range of burgers will always make you crave for more. </p>
        <p>We know you’re obviously a fan of desi flavours and have your heart set on it. Your search for the best Indian fusion burgers ends here. With the taste of India in every bite, we have thoughtfully curated our menu to serve the Indian palette. Bursting with flavours, our wide range of burgers will always make you crave for more. </p></Col>
      </Row>
      </Container>
      </>
  )
}

export default Aboutus
