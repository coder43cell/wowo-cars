
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproducts';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';


function App() {
return (
  <BrowserRouter>
    <div className="App bg-black">
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header bg-black" >
        <marquee behavior="" direction="left"><h1>Welcome to AutoVibe</h1></marquee>
       
      </header>
      <nav >
        <Link to="/addproduct" className='btn btn-info btn-sm m-1'>Addproduct</Link>
        <Link to="/" className='btn btn-success btn-sm m-1'>Get products</Link>    
        <Link to="/signin" className='btn btn-danger btn-sm m-1'>signin</Link>
        <Link to="/signup" className='btn btn-primary btn-sm m-1'>signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Getproduct/>}/>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/makepayment" element={<Mpesapayment/>}/>
        
      </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
