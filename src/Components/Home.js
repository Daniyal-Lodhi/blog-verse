import React from 'react'
import './css/Navbar.css'
<<<<<<< HEAD
import svg from './assets/arrowdown.svg'
import sports from './assets/sports.jpg'
import funnel from './assets/funnel.jpg'
import weather from './assets/weather.jpg'
import politics from './assets/politics.jpg'
import food from './assets/food.jpg'
import other from './assets/othercat.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="col-sm-12" id='header'>
        <div className='d-flex flex-column' id='homeflex'>
          <div><h1> <span className='text-warning'>Find </span> a vast range</h1></div>
          <div><h1>of blogs on</h1></div>
          <div className='text-primary'><h1>BlogVerse</h1></div>
        <a href="#catflex">
          <div className="btn btn-light" id='homeSD'  >
            <svg width="27" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="yellow" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" /></svg>
          </div>
          </a>
        </div>


      </div>
      
      <div className='my-5' id='categories'>
        <h1 className='mx-auto'>Categories</h1>
        <div className="d-flex justify-content-center col-md-10 mx-auto" id='catflex'>
        <div className="catitem" style={{backgroundImage:`url(${sports})`}}><h1>Sports</h1></div>
        <div className="catitem" style={{backgroundImage:`url(${funnel})`}}><h1>Technology</h1></div>
        <div className="catitem" style={{backgroundImage:`url(${weather})`}}><h1>Weather</h1></div>
        <div className="catitem" style={{backgroundImage:`url(${politics})`}}><h1>Politics</h1></div>
        <div className="catitem" style={{backgroundImage:`url(${food})`}}><h1>Food</h1></div>
        <div className="catitem" style={{backgroundImage:`url(${other})`}}><h1>Other<br/>categories</h1></div>
     
        </div>

      
      </div>


    </>

=======

const Home = () => {
  return (
    <div className="" id='header'>
        <div className='d-flex flex-column' id='homeflex'>
        <div><h1> <span className='text-warning'>Find </span> a vast range</h1></div>
        <div><h1>of blogs on</h1></div>
        <div className='text-primary'><h1>BlogVerse</h1></div>

        </div>
    </div>
>>>>>>> 24d11198fbf19ebb14308b5a76a3ea2ae2d64f78
  )
}

export default Home
