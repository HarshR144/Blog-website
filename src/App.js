import './App.css';
import Pagination from './components/Pagination'
import Header from './components/Header'
import Blogs from './components/Blogs'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <div className="App w-full h-full flex flex-col gap-y-1 justify-center items-center">
          <Header/>
          <Blogs/>
          <Pagination/>


    </div>
  );
}

export default App;
