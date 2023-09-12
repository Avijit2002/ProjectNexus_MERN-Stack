import Button from "./Button"
import styles from "./Search.module.css"


function Search({query,setQuery,searchBy,setSearchBy}) {
    return (
         <div className={styles.search}>
            <input type="text" placeholder="SEARCH" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <select name="" id="" value={searchBy} onChange={(e)=>setSearchBy(e.target.value)}>
                <option value="0">search by</option>
                <option value="1">Topic</option>
                <option value="2">College</option>
            </select>
            <Button>Search</Button>
        </div>
    )
}

export default Search
