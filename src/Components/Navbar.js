import React, { createContext, useState } from 'react'
import './css/Home.css'
import { Link, useNavigate } from "react-router-dom";



const Navbar = (props) => {

  // SETTING NAVBAR BG ACCORDING TO WIDTH
  let bg =window.innerWidth<=991?'dark':'transparent';
  const [navBg,setNavBg] = useState(bg)
  window.addEventListener('resize',()=>{
    if(window.innerWidth<=991){
      setNavBg('dark')

    }
    else{
      setNavBg('transparent')
    }
  })

  //  SCROLLING DOWN TO ABOUT
  const navigate = useNavigate();
  const  navabout =  ()=>{
    navigate('/');
  }

  // CREATING CONTEXT FOR DARK THEME

  const Themecontext = createContext();


  <Themecontext.Provider value={{}} >
   {props.children}
  </Themecontext.Provider>


  
  

  
  return (
    
      <nav className={`navbar navbar-expand-lg bg-${navBg} fw-bolder fixed-top my-0 `}>
  <div className="container-fluid fw-bold">
    <a className="navbar-brand text-light" href="/"><h2>Blog<span className='text-warning'>Verse</span></h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-normal text-light">
        <li className="nav-item">
          <Link className="nav-link mx-5 text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light mx-5 dropdown-toggle " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu mx-5 " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item " to="/Blog/recent">Recent</Link></li>
            <li><a className="dropdown-item" href="/">Famous</a></li>
          </ul>
        </li>   
        <li className="nav-item">
          <a className="nav-link text-light mx-5"  href='#about' id='about1' onClick={navabout}>About</a>
        </li>
        
        <li className="nav-item ">
          <Link className="nav-link mx-5 text-light " to="/contact" tabIndex="-1" aria-disabled="true">Contact</Link>
        </li>
      </ul>
      <form className="d-flex searchf">
       <input type="text" placeholder='Search'className='mx-0 bg-transparent text-light' id='search'/>
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-search mx-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar
