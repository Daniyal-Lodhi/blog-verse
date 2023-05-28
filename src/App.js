import './App.css';
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
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
