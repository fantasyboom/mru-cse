import React, { useEffect, useState } from 'react'
import Video from '../components/Video';
import './gridstyle.css'
export default function Faculty() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setBlogs(data);
      console.log(data)
    })
  },[])
  return (
    <div id='Faculty'>
      <h1 className="mb-10 font-palanquin text-8xl max-sm:text-[68px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0">
            Faculty
          </span>
        </h1>
        
        { isPending && <div>Loading...</div> }
        <div className="grid-container">
        {blogs && 
        blogs.map(blog => (
          <Video content={blog} key={blog.id}/>
        ))
        }
        </div>
        
    </div>
  )
}