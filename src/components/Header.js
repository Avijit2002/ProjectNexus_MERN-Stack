import { useEffect, useState } from "react";
import styles from "./Header.module.css"
import Search from "./Search";
import SearchResult from "./SearchResult"

export default function Header({post}){

  const [query,setQuery] = useState(null);
  const [searchBy,setSearchBy] = useState(0);
  const [matchingProjects,setMatchingProjects] = useState([])
  
  useEffect(()=>{
    async function getResult(){
        try {
            let matching;
            const q= query.toLowerCase();
            if(searchBy === 0 || searchBy === 1){
                matching = post.filter((project) => {
                return (
                  project.title.toLowerCase().includes(q) ||
                  project.tags.some((tag) => tag.toLowerCase().includes(q))
                );
                })
            }else{
                matching = post.filter((project) => {
                return (
                  project.university.toLowerCase().includes(q)
                );
                })
                console.log(matching)
            }
              setMatchingProjects(matching)
              if(query===null||query===''){
                setMatchingProjects([])
              }
        } catch (error) {
            console.log(error)
        }  
    }
    getResult();
},[query,setMatchingProjects,searchBy])

    return(
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>The Project Portal</h2>
        </div>
        <Search 
          setQuery={setQuery} 
          setSearchBy={setSearchBy}
          query={query}
          searchBy={searchBy}/>
        {matchingProjects.length!==0?<SearchResult result={matchingProjects} searchBy={searchBy} />:<></>}
        <a href="">Log Out</a>
      </header>
    );
}