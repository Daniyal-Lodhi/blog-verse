import React, {useContext } from 'react' ;
import './css/style.css'
import team1 from './assets/team-1.jpg'
import team2 from './assets/team-2.jpg'
import team3 from './assets/team-4.jpg'
import { ThemeContext } from '../App';

const About = () => {
    const context = useContext(ThemeContext);
    const {textcolor,bgcolor} = context;
  return (
    <>
    {/* <!-- Team Start --> */}
       
       <div className={`container-xxl py-5 bg-${bgcolor}`} id='team'>
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px;"}}>
                <p className="fs-5 fw-medium text-primary">Our Team</p>
                <h1 className={`display-5 mb-5 text-${textcolor}`}>Our Expert People Ready to Help You</h1>
            </div>
            <div className="row g-4 d-flex justify-content-center gap-5 ">
                <div className="col-lg-3 col-md-6 wow fadeInUp bg-light" data-wow-delay="0.1s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src= {team1} alt=""/>
                        <h5>Alex Robin</h5>
                        <span className="text-primary">Founder & CEO</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp bg-light" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src={team2} alt=""/>
                        <h5>Adam Crew</h5>
                        <span className="text-primary">Co Founder</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 wow fadeInUp bg-light" data-wow-delay="0.7s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src= {team3} alt=""/>
                        <h5>Robert Jordan</h5>
                        <span className="text-primary">Digital Marketer</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}
    </>
  )
}

export default About
