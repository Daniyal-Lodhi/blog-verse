import React, { useContext } from 'react'
import "./css/style.css"
import { ThemeContext } from '../App'

const Contact = (props) => {
    const context = useContext(ThemeContext);
    const {contactbg} = context;

    const contactStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactbg}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      };
  return (
    <>

       {/* Contact Start  */}
    <div className="container-xxl py-5 " id="hello" style={contactStyles}>
        <div className={`container `}>
            <div className={`"text-center mx-auto wow fadeInUp"`} data-wow-delay="0.1s" style= {{maxWidth: "500px"}}>
                <h1 className={`display-5 mb-5 text-white text-center pt-5`}>If You Have Any Query, Please Contact Us</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 " data-wow-delay="0.1s">
                    <h3 className="mb-4 text-white">Need a functional contact form?</h3>
                    <p className="mb-4 text-white">The contact form is currently inactive.</p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "200px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" id='submit' >Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 wow fadeInUp text-white" data-wow-delay="0.5s">
                    <h3 className="mb-4 ">Contact Details</h3>
                    <div className="d-flex border-bottom pb-3 mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h6>Our Office</h6>
                            <span className='text-white'>123 Street, New York, USA</span>
                        </div>
                    </div>
                    <div className="d-flex border-bottom pb-3 mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ms-3 ">
                            <h6>Call Us</h6>
                            <span>+012 345 67890</span>
                        </div>
                    </div>
                    <div className="d-flex border-bottom-0 pb-3 mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                            <i className="fa fa-envelope text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h6>Mail Us</h6>
                            <span>info@example.com</span>
                        </div>
                    </div>

                    <iframe className="w-100 rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameborder="0" style={{minHeight: "300px", border:0}} allowfullscreen="" aria-hidden="false"
                    tabIndex="0" title='map'></iframe>
                </div>
            </div>
        </div>
    </div>
    {/*  Contact End  */}
    </>
  )
}

export default Contact
