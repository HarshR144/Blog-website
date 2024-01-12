import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
// S1
export const AppContext = createContext();
function AppContextProvider({children}){
    const [loading ,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // Data
    async function fetchBlogPosts(page=1){
        setLoading(true);
        const url = `${baseUrl}`;
        try{
            
            const fetchResult = await fetch(url);
            const data = await fetchResult.json();
            setCurrentPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(e){
            console.log("Error in fetching data ");
            setCurrentPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    function handlePageChange(gotoPage){
        setCurrentPage(gotoPage);
        fetchBlogPosts(gotoPage); 
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }
// S2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;