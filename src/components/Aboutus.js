import React from 'react'
import Image from 'react-bootstrap/Image';
// import '../App.css';

function Aboutus() {
  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <Image
        src="https://jthemes.net/themes/html/testo/files/images/about-page.jpg"
        style={{marginBottom: '30px',height: '360px',width: '100%',opacity: '0.7'}} fluid />
      <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',fontFamily:'sans-serif',fontWeight:'bold',fontSize:'3.2rem' }}>
        ABOUT US
      </h1>
    </div>
  )
}

export default Aboutus