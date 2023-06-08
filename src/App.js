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
<<<<<<< HEAD
      <Route exact path='/' element={<Home/>}   />
=======
        <Route exact path='/' element={<Home/>}   />
>>>>>>> 24d11198fbf19ebb14308b5a76a3ea2ae2d64f78
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
