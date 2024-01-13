import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { newBaseUrl } from '../baseUrl';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';
import Pagination from '../components/Pagination';
const BlogPage = () => {
    const [blog,setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);

        let url = `${newBaseUrl}?blogId=${blogId}`;
        try{
            const result = await fetch(url);

            console.log(result);
            const data = await result.json();
            console.log(data);
            console.log(data.blog);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch(e){
            console.log("Error")
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId)
        fetchRelatedBlogs();
        

    },[location.pathname])

    return (
        <div>
            <Header/>
            <div className='w-11/12 max-w-[700px] mx-auto mt-[66px] mb-[70px]   py-8 '>
            <button onClick={()=>navigation(-1)}
             className="rounded-md border-gray-300 border px-4 py-1">back</button>
            <div className=' mt-7 flex flex-col items-center justify-center'>
                {
                    loading ? (<Spinner/>) : (
                        blog ? (
                        <div className='  flex flex-col gap-y-7'>
                            <BlogDetails post={blog}/>
                            <div>
                            <h2 className='text-2xl font-bold mb-1'>Related Blogs</h2>
                            <div className='  h-0.5 bg-gray-300 '></div>
                            </div>
                            
                            {
                                relatedBlogs.map((post)=><BlogDetails key={post.id} post={post}/> )
                            }
                        </div>
                           
                        ) : (<p> No data found</p>)
                    )
                }
            </div>
           
            </div>
      
        </div>
  )
}

export default BlogPage