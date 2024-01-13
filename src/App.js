import './App.css';
import Pagination from './components/Pagination'
import Header from './components/Header'
import Blogs from './components/Blogs'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';

function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
    const category = location.pathname.split('/').at(-1).replace('-',' ');
 
    if(location.pathname.includes("tags")){
    
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
 
    }
     },[location.pathname, location.search])
  return (
    <div>
        
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/blog/:blogId' element = {<BlogPage/>}/>
            <Route path='/tags/:tag' element = {<TagPage/>}/>
            <Route path='/categories/:category' element = {<CategoryPage/>}/>
        </Routes>
    </div>  
  );
}

export default App;
