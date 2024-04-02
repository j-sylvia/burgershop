import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import carousal1 from '../images/carousal-1.png';
import carousal2 from '../images/carousal-2.jpg';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

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
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <Rating value={item.rating} />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Row>
  );

  return(
    <>
    <Carousel data-bs-theme="dark" style={{marginBottom:'50px'}}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal2}
        alt="First slide"
        height='600px'

      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal1}
        alt="Second slide"
        height='600px'
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal2}
        alt="Third slide"
        height='600px'

      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  <Tabs
      defaultActiveKey={activeKey}
      id="justify-tab-example"
      className="mb-3"
      style={{ fontSize: 'larger', fontWeight: 'bolder' }}
      justify
      onSelect={(k) => setActiveKey(k)}
    >
      <Tab eventKey="Burgers" title="Burgers">
        {renderTabContent('burgers')}
      </Tab>
      <Tab eventKey="Pizzas" title="Pizzas">
        {renderTabContent('pizzas')}
      </Tab>
      <Tab eventKey="Salads" title="Salads">
        {renderTabContent('salads')}
      </Tab>
      <Tab eventKey="Sides" title="Sides">
        {renderTabContent('sides')}
      </Tab>
      <Tab eventKey="Desserts" title="Desserts">
        {renderTabContent('desserts')}
      </Tab>
    </Tabs>

  {/* <Tabs
      defaultActiveKey="Burgers"
      id="justify-tab-example"
      className="mb-3" style={{fontSize:'larger',fontWeight:'bolder'}}
      justify
    >
      <Tab eventKey="Burgers" title="Burgers">
      
      <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{width:'100%',margin:'auto'}}>
        {filterBurgers.map((items)=>(
          <div key={items.id}>
            
      <Card>
      <Card.Img variant="top" src={items.imgdata} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        <Rating value={items.rating} />
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
       ))}
      </Row> 
      
      </Tab>
      <Tab eventKey="Pizza" title="Pizza">
      <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{width:'100%',margin:'auto'}}>
        {filterPizzas.map((items)=>(
          <div key={items.id}>
            
      <Card style={{ width: "15rem"}}>
      <Card.Img variant="top" src={items.imgdata} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        <Rating value={items.rating} />
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
       ))}
      </Row>
      </Tab>
      <Tab eventKey="Salads" title="Salads">
      <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{width:'100%',margin:'auto'}}>
        {filterSalads.map((items)=>(
          <div key={items.id}>
            
      <Card style={{ width: "18rem"}}>
      <Card.Img variant="top" src={items.imgdata} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        <Rating value={items.rating} />
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
       ))}
      </Row>
      </Tab>
      <Tab eventKey="Sides" title="Sides">
      <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{width:'100%',margin:'auto'}}>
        {filterSides.map((items)=>(
          <div key={items.id}>
            
      <Card style={{ width: "15rem"}}>
      <Card.Img variant="top" src={items.imgdata} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        <Rating value={items.rating} />
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
       ))}
      </Row>
      </Tab>

      <Tab eventKey="Desserts" title="Desserts">
      <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{width:'100%',margin:'auto'}}>
        {filterDesserts.map((items)=>(
          <div key={items.id}>
            
      <Card style={{ width: "15rem"}}>
      <Card.Img variant="top" src={items.imgdata} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        <Rating value={items.rating} />
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
       ))}
      </Row>
      </Tab>
    </Tabs> */}

  </>

  );
}

export default Home;
