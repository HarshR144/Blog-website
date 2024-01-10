import { createContext, useState } from "react";


export const AppContext = createContext();
function AppContextProvider({children}){
    const [loading ,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);



}
