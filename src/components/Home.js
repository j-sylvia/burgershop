import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import carousal1 from '../images/carousal-3.jpg';
// import carousal2 from '../images/carousal-1.png';
import carousal3 from '../images/carousal-3.jpg';
import carousal4 from '../images/carousal-4.jpg';
import carousal5 from '../images/carousal-5.jpg';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css'

const baseURL = "https://j-sylvia.github.io/api/db.json";

function Home() {
  const [item, setItem] = useState([]);
  const [activeKey, setActiveKey] = useState('Burgers');
  useEffect(() => {
    
    axios.get(baseURL)
      .then(res => {
        setItem(res.data);
        
      })
      .catch(err => console.log(err));
  }, []);
  const filterItems = (category) => item.filter(item => item.category === category.toLowerCase());

  const renderTabContent = (category) => (
    <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{ width: '100%', margin: 'auto' }}>
      {filterItems(category).map((item) => (
        <div key={item.id}>
          <Card style={{padding:'15px'}}>
            <Card.Img variant="top" src={item.imgdata} />
            <Card.Body>
              <Card.Title>{item.name} - <b>₹.{item.price}</b></Card.Title>
              <Card.Text>
                <Rating value={Number(item.rating)} />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Row>
  );

  return(
    <>
    <Carousel data-bs-theme="dark" style={{marginBottom:'60px'}}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal3}
        alt="First slide"
        height='600px'
      />
      {/* <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal4}
        alt="Second slide"
        height='600px'
      />
      {/* <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal5}
        alt="Third slide"
        height='600px'

      />
      {/* <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
<div className='container tab-container'>
  <Tabs
      defaultActiveKey={activeKey}
      id="justify-tab-example"
      className="mb-3"
      style={{ fontSize: 'larger', fontWeight: 'bolder',fontFamily:'verdana',border:'none'}}
      justify 
      onSelect={(k) => setActiveKey(k)} 
    >
    <Tab style={{backgroundColor:'#58c4c4',paddingBottom:'24px',borderRadius:'0 0 10px 10px'}} eventKey="Burgers" title="Burgers" tabClassName="coloredTab">
        {renderTabContent('burgers')}
      </Tab>
      <Tab style={{backgroundColor:'#58c4c4',borderRadius:'0 0 10px 10px',paddingBottom:'24px'}} eventKey="Pizzas" title="Pizzas" tabClassName='coloredTab'>
        {renderTabContent('pizzas')}
      </Tab>
      <Tab style={{backgroundColor:'#58c4c4',borderRadius:'0 0 10px 10px',paddingBottom:'24px'}} eventKey="Salads" title="Salads" tabClassName="coloredTab">
        {renderTabContent('salads')}
      </Tab>
      <Tab style={{backgroundColor:'#58c4c4',borderRadius:'0 0 10px 10px',paddingBottom:'24px'}} eventKey="Sides" title="Sides" tabClassName="coloredTab">
        {renderTabContent('sides')}
      </Tab>
      <Tab style={{backgroundColor:'#58c4c4',borderRadius:'0 0 10px 10px',paddingBottom:'24px'}} eventKey="Desserts" title="Desserts" tabClassName="coloredTab">
        {renderTabContent('desserts')}
      </Tab>
    </Tabs>
    <Button size="lg" style={{marginTop:'40px',border:'2px solid #58c4c4',backgroundColor:'#58c4c4'}} href='/our-menu'>CLICK HERE TO ORDER</Button>
</div>

  </>

  );
}

export default Home;
