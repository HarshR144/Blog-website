import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
// S1
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading , setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // Data
    async function fetchBlogPosts(page){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(e){
            console.log("Error in fetching data ");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    function handlePageChange(Page){
        setPage(Page);
        fetchBlogPosts(Page); 
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }
// S2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}

