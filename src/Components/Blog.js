import React from 'react'

const Blog = () => {
    const blogs = async ()=>{
        
        const r = await fetch('https://newsapi.org/v2/everything?q=pakistan&pagesize=10&apiKey=81eb3d155da54414bfd279686f10a525')
        let response = await r.json()
        console.log(response)
    }
    blogs();
  return (
    <div>
      
    </div>
  )
}

export default Blog
