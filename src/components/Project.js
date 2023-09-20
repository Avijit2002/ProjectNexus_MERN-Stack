import Button from "./Button"
import styles from './Project.module.css'
import { Link } from "react-router-dom"
import Button2 from "./Button2"
export default function Project({post}){
    //console.log(post)
    return(
        <div className={styles.project}>
            <header>
                <h2>{post.title}</h2>
                <div className={styles.bookmark}><Button2>Bookmark</Button2></div>
                <div>
                    <p><span>Authors:</span> {post.author}</p>
                    <p><span>College: </span><Link to='/college-profile' >{post.university}</Link></p>
                </div>
                <div className={styles.bookmark}><span className={styles.domain}><span>Domain: </span>{post.category}</span></div>
            </header>
            <hr />
            <div className={styles.main}>
                <img src={post.image} alt="project pic" />
                <p>{post.description}</p>
                <div className={styles.btnBox}>
                    <Button path={`../project-details/${post.id}`}>Details</Button>
                    <Button>{post.likes} Upvotes⬆️</Button>
                </div>
                <Button>Go to Discussion Forum</Button>
            </div>
            
          </div>
    )
}