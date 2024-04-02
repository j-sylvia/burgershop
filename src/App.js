import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './components/Aboutus';
// import Contact from './components/Contact';
import Layout from './components/Layout';
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/our-menu" element={<Menu/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>

    </Routes>
    
    </BrowserRouter>
   
   
<div class="mt-5">

    <footer class="text-white text-center text-lg-start bg-success">
    {/* <!-- Grid container --> */}
    <div class="container p-4">
      {/* <!--Grid row--> */}
      <div class="row mt-4">
        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">About company</h5>
  
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>
  
          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>
  
          <div class="mt-4">
            
            <i class="fab fa-facebook-f"></i>
            
            <i class="fab fa-dribbble"></i>
            
            <i class="fab fa-twitter"></i>
            
            <i class="fab fa-google-plus-g"></i>
           
          </div>
        </div>
        {/* <!--Grid column--> */}
  
        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">Our Location</h5>
  
          {/* <div class="form-outline form-white mb-4">
            <input type="text" id="formControlLg" class="form-control form-control-lg" />
            <label class="form-label" for="formControlLg">Search</label>
          </div> */}
  
          <ul class="fa-ul">
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">New York, NY 10012, US</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">info@example.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 01 234 567 88</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
  
        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Opening hours</h5>
  
          <table>
            <tbody class="font-weight-normal">
              <tr><i class="fas fa-clock"></i>
                <td> Mon - Thu:</td>
                <td> 8am - 9pm</td>
              </tr>
              <tr><i class="fas fa-clock"></i>
                <td> Fri - Sat:</td>
                <td> 8am - 1am</td>
              </tr>
              <tr><i class="fas fa-clock"></i>
                <td> Sunday:</td>
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
    <div class="text-center p-3">
      © 2021 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
</div>
{/* <!-- End of .container --> */}
    </div>
  );
}

export default App;
