import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const Footer = () => {
  const context = useContext(ThemeContext);
  const {textcolor ,warningbg} = context ;
  return (
    <>
          {/* <!-- Footer Start --> */}
    <div className={`container-fluid footer  p-5 text-${textcolor} bg-${warningbg}`} data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="  mb-4">Our Office</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="  mb-4">Quick Links</h4>
                    <a className={`btn btn-link text-${textcolor}`} href=""> Us</a>
                    <a className={`btn btn-link text-${textcolor}`} href="">Contact Us</a>
                    <a className={`btn btn-link text-${textcolor}`} href="">Our Services</a>
                    <a className={`btn btn-link text-${textcolor}`} href="">Terms & Condition</a>
                    <a className={`btn btn-link text-${textcolor}`} href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="  mb-4">Business Hours</h4>
                    <p className="mb-1">Monday - Friday</p>
                    <h6 className=" ">09:00 am - 07:00 pm</h6>
                    <p className="mb-1">Saturday</p>
                    <h6 className=" ">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className=" ">Closed</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="  mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative w-100">
                        <input className={`form-control  bg-${warningbg} w-100 py-3 ps-4 pe-5`}   type="text"
                            placeholder="Your email"/>
                        <button type="button"
                            className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    {/* <!-- Copyright Start --> */}
    <div className={`container-fluid bg-${warningbg} copyright py-4 text-${textcolor}`}>
        <div className="container">
            <div className="row">
                <div className={`col-md-6 text-center  text-md-start mb-3 mb-md-0 text-${textcolor}`}>
                    &copy; <a className={`fw-medium text-${textcolor} `} href="#">BlogVerse</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    
                    Designed By <a className={`fw-medium text-${textcolor} `} href="https://www.linkedin.com/in/daniyal-lodhi-77b995242/">Muhammad Daniyal</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Copyright End --> */}
    </>
  )
}

export default Footer
