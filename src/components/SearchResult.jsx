import { Link } from "react-router-dom"
import styles from "./SearchResult.module.css"

function SearchResult({result,searchBy}) {
    const check = searchBy==='2';
    return (
        <div className={styles.resultBox}>
            <ul>
                {result.map(project=><Link style={{textDecoration:'none'}} to={check?'/college-profile':`project-details/${project.id}`}><li key={project.id}>{check? project.university: project.title}</li></Link>)}
            </ul>
        </div>
    )
}

export default SearchResult
