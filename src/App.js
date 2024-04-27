import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './components/Aboutus';
// import Contact from './components/Contact';
import Layout from './components/Layout';
import Home from "./components/Home";
import Cart from "./components/Cart";
import OffCanvasExample from "./components/Cart";
// import OffCanvasExample from './Cart';

function App() {
  

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/our-menu" element={<Menu/>}></Route>
        <Route element={<OffCanvasExample/>}></Route>
      </Route>

    </Routes>
    
    </BrowserRouter>
   
   
<div className="mt-5">

    <footer className="text-white text-center text-lg-start" style={{backgroundColor:'#40a8a8'}}>
    {/* <!-- Grid container --> */}
    <div className="container p-4">
      {/* <!--Grid row--> */}
      <div className="row mt-4">
        {/* <!--Grid column--> */}
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>
  
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>
  
          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>
  
          <div className="mt-4">
            
            <i className="fab fa-facebook-f"></i>
            
            <i className="fab fa-linkedin"></i>
            
            <i className="fab fa-twitter"></i>
            
            <i className="fab fa-instagram"></i>
           
          </div>
        </div>
        {/* <!--Grid column--> */}
  
        {/* <!--Grid column--> */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Our Location</h5>
  
          {/* <div class="form-outline form-white mb-4">
            <input type="text" id="formControlLg" class="form-control form-control-lg" />
            <label class="form-label" for="formControlLg">Search</label>
          </div> */}
  
          <ul className="fa-ul">
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span> <span className="ms-2">New York, NY 10012, US</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
  
        {/* <!--Grid column--> */}
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>
  
          <table>
            <tbody className="font-weight-normal">
            <tr> 
                <td><i className="fas fa-clock"></i> Mon - Thu:</td>
                <td> 8am - 9pm</td>
              </tr>
              <tr>
                <td><i className="fas fa-clock"></i> Fri - Sat:</td>
                <td> 8am - 1am</td>
              </tr>
              <tr>
                <td><i className="fas fa-clock"></i> Sunday:</td>
                <td> 9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!--Grid column--> */}
      </div>
      
    </div>
    {/* <!-- Grid container --> */}
  
    {/* <!-- Copyright --> */}
    <div className="text-center p-3">
       &copy; 2024. Copyright:
      <a className="text-white" href="http://localhost:3000/">Burgershop.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
</div>
{/* <!-- End of .container --> */}
    </div>
  );
}

export default App;
