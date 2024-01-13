import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    const cat = String(post.category).replace(" ", "-");
    
  return (
    <div className=''>
    <NavLink to={`/blog/${post.id}`}> 
        <p className='font-bold text-lg '>{post.title}</p>  
    </NavLink>
    
    <p className='text-sm mt-[4px]'>
        By <span className='italic'>{post.author}</span> on {" "}
        <NavLink to={`/categories/${cat}`}>
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
        
    </p>

    <p className='text-sm mt0[4px]'>
      Posted on <span>{post.date}</span>
    </p>
    
    <p className='text-md mt-[14px]'>{post.content}</p>

    <div className='flex gap-x-3'>
      {
        post.tags.map((tag,index)=> {
            return (
            <NavLink key={index} to={`/tags/${String(tag).replace(" ","-")}`}>
                <span  className='text-blue-700 font-bold underline text-xs mt-[5px]'>{`#${tag}`}</span>
            </NavLink>
            )
        })
      }
    </div>
</div>
  )
}

export default BlogDetails