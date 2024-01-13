import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails';
const Blogs = () => {
  const {loading,posts} = useContext(AppContext);
  // py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]
  return (
    <div className='w-11/12 max-w-[700px] mx-auto  mt-[66px] mb-[70px] flex flex-col gap-y-7 py-8'>
      {
        loading ? (<Spinner/>) : 
        (
          posts.length === 0 ? <p className="font-bold text-3xl text-center my-[200px]">No post Found</p> : posts.map((post)=>(
           <BlogDetails key = {post.id} post={post}/>
          ))
        )
      }
    </div>
  )
}

export default Blogs