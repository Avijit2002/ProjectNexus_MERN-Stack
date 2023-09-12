import Button from "./Button"
import styles from './Project.module.css'
import { Link } from "react-router-dom"
export default function Project({post}){
    //console.log(post)
    return(
        <div className={styles.project}>
            <header>
                <h2>{post.title}</h2>
                <span>Bookmark</span>
                <div>
                    <p>Authors - {post.author}</p>
                    <p>College: <Link to='/college-profile' >{post.university}</Link></p>
                </div>
                <span>Domain: {post.category}</span>
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