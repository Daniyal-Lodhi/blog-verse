import React, {  useContext, useEffect} from 'react'

import './css/Home.css'
import AOS from "aos";
import ftbg from './assets/ftbg.jpg'
import sports from './assets/sports.jpg'
import technology from './assets/technol.jpg'
import funnel from './assets/funnel.jpg'
import weather from './assets/weather.jpg'
import politics from './assets/politics.jpg'
import food from './assets/food.jpg'
import other from './assets/othercat.jpg'
import About from './About';
import { ThemeContext } from '../App';

const Home = (props) => {



  // ThemeContext
  const context = useContext(ThemeContext)
  const{ textcolor,bgcolor,bodybg,homebg ,categbg} = context;
 
  // CSS START
  // header css
  const headerStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${homebg}) `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };
 
  // feature blg 
  const ftstyle = {

    backgroundImage: textcolor === 'dark' ? `url(${ftbg})` : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${categbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  // body color 
  document.body.style.backgroundColor = bodybg;
  // CSS END



  useEffect(() => {
    AOS.init({
      disable: 'mobile'
    });
  }, []);



  return (
    <>

      <div className="col-sm-12 mx-0 pd-0" id='header' style={headerStyles}>
        <div className='d-flex flex-column' id='homeflex'>
          <div><h1> <span className='text-warning'>Find </span> a vast range</h1></div>
          <div><h1>of blogs on</h1></div>
          <div className='text-warning'><h1>BlogVerse</h1></div>
          <a href="#categories">
            <div className="btn btn-light" id='homeSD'  >
              <svg width="27" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" stroke={'white'} strokeWidth={2} fill="white" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" /></svg>
            </div>
          </a>
        </div>


      </div>

      <div className={`pt-5 pb-5 bg-${bgcolor} text-light`} id='categories'>
        <h1 className={`mx-auto text-${textcolor} mb-5 pb-3 border-bottom-${textcolor} `}>Categories</h1>
        <div className="d-flex justify-content-center col-md-10 mx-auto pb-5" id='catflex'>
          <div className="catitem" style={{ backgroundImage: `url(${sports})` }}><h1>Sports</h1></div>
          <div className="catitem" style={{ backgroundImage: `url(${technology})` }}><h1>Technology</h1></div>
          <div className="catitem" style={{ backgroundImage: `url(${weather})` }}><h1>Weather</h1></div>
          <div className="catitem" style={{ backgroundImage: `url(${politics})` }}><h1>Politics</h1></div>
          <div className="catitem" style={{ backgroundImage: `url(${food})` }}><h1>Food</h1></div>
          <div className="catitem" style={{ backgroundImage: `url(${other})` }}><h1>Other categories</h1></div>

        </div>
      </div>

      {/* Featured Blogs */}
      <div id='ftmain' style={ftstyle} >
        <div className='container'>

          <div className="row justify-content-center mb-1 pb-5" >
            <div className="col-md-7 heading-section text-center ">
              <h2 className={`mb-4 mt-4 text-${textcolor}`} data-aos="fade-down" data-aos-delay="50" data-aos-duration="500 " >Featured Blogs</h2>
              <p className={`text-${textcolor}`}>One of the best blogs rated by our readers. Solely based on the current world topics.</p>
            </div>
          </div>
          <div className="row d-flex mb-5" id='featBcont' >
            <div className="col-md-4 d-flex" >
              <div className={`blog-entry justify-content-end bg-${bgcolor} text-${textcolor}`} data-aos="fade-right" data-aos-delay="400" data-aos-duration="500" >
                <a href="/" className="block-20 rounded-3 " style={{ backgroundImage: `url(${politics})` }}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className={` mr-2 text-${textcolor}`}>June 21, 2019</span>
                      <a href="/" className={` mr-2 text-${textcolor}`}> by <i>Admin</i> </a>
                      <a href="/" className="meta-chat"><span className="icon-chat"></span></a>
                    </p>
                  </div>
                  <h3 className={`heading`}><a href="/" className={` text-${textcolor}`}>Why Lead Generation is Key for Business Growth</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex" >
              <div className={`blog-entry justify-content-end bg-${bgcolor} text-${textcolor}`} data-aos="fade-right" data-aos-delay="800" data-aos-duration="500" >
                <a href="/" className="block-20 rounded-3 " style={{ backgroundImage: `url(${funnel})` }}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className={` mr-2 text-${textcolor}`}>June 21, 2019</span>
                      <a href="/" className={` mr-2 text-${textcolor}`}> by <i>Admin</i> </a>
                      <a href="/" className="meta-chat"><span className="icon-chat"></span></a>
                    </p>
                  </div>
                  <h3 className={`heading`}><a href="/" className={` text-${textcolor}`}>Why Lead Generation is Key for Business Growth</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex" >
              <div className={`blog-entry justify-content-end bg-${bgcolor} text-${textcolor}`} data-aos="fade-right" data-aos-delay="1200" data-aos-duration="500" >
                <a href="/" className="block-20 rounded-3 " style={{ backgroundImage: `url(${food})` }}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className={` mr-2 text-${textcolor}`}>June 21, 2019</span>
                      <a href="/" className={` mr-2 text-${textcolor}`}> by <i>Admin</i> </a>
                      <a href="/" className="meta-chat"><span className="icon-chat"></span></a>
                    </p>
                  </div>
                  <h3 className={`heading`}><a href="/" className={` text-${textcolor}`}>Why Lead Generation is Key for Business Growth</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     


      
        <div id='about'>
          <About />
        </div>
    </>

  )
}

export default Home
