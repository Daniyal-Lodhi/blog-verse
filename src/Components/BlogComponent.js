import React from 'react'
import funnel from './assets/funnel.jpg'

const BlogComponent = () => {
  return (
    <>
      <div className="container my-5 py-5 ">
        <div className="card rounded-0 shadow" style={{ width: '18rem' }}>
          <img src={funnel} className="card-img-top rounded-0" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-primary my-0 " style={{fontFamily:'sans-serif'}}>Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-transparent border-warning rounded-0 pb-1 pt-1">Read more</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogComponent
