import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router, Switch ,Route ,Routes } from "react-router-dom";


function App() {
  return (
    <> 
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}   />
      <Route exact path='/contact' element={<Contact/>}   />
      
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
