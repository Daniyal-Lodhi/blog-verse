import './App.css';
import { createContext, useState } from 'react';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import whitebg from './Components/assets/whitebg.jpg';
import neonbg from './Components/assets/neonbg.jpg';
import categorybg from './Components/assets/bg3.jpg';
import contactUsbg from './Components/assets/contactbg.jpg';
import Mountainbgpic from './Components/assets/bg5.jpg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Themechanger from './Components/Themechanger';
import Blog from './Components/Blog';


const ThemeContext = createContext();
function App() {


  
  const [textcolor, settextcolor] = useState('dark');
  const [bodybg, setbodybg] = useState('white');
  const [bgcolor, setbgcolor] = useState('light');
  const [warningbg, setwarningbg] = useState('warning');
  const [homebg, sethomebg] = useState(whitebg);
  const [categbg, setcategbg] = useState('none');
  const [themetype,setthemetype] = useState('moon')
  const [contactbg, setcontactbg] = useState(contactUsbg);


  const handleThemeType = () => {
    setthemetype(
      themetype === 'moon' ? 'sun' : 'moon'
    );
    sethomebg(
      homebg === whitebg ? neonbg : whitebg
    );
    setcategbg(
      categbg === 'none' ? categorybg : 'none'
    );
    setcontactbg(
      contactbg === contactUsbg ? Mountainbgpic : contactUsbg 
    );
    settextcolor(
      textcolor === 'light' ? 'dark' : 'light'
    );
    setbodybg(
      bodybg === 'white' ? 'black' : 'white'
    );
    setbgcolor(
      bgcolor === 'light' ? 'dark' : 'light'
    );
    setwarningbg(
      warningbg === 'warning' ? 'dark' : 'warning'
    );
  };


 
  return (
    <>
    
      <ThemeContext.Provider value={{ textcolor, settextcolor, bodybg,bgcolor,warningbg, setbgcolor, homebg, sethomebg, categbg, setcategbg,themetype,setthemetype ,handleThemeType,contactbg, setcontactbg}}>
        <Router>
          <Navbar />
          <Themechanger/>
          
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/Blog/recent' element={<Blog />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
