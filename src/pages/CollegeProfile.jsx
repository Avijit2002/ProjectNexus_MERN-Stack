import Header from '../components/Header'
import styles from './CollegeProfile.module.css'
import Backbtn from '../components/Backbtn'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Project from '../components/Project'

function CollegeProfile({post}) {
    return (
        <div className={styles.pages}>
            <Header />
            <Backbtn path="/"/>
            <div className="main">
                <Card>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Techno International New Town</h1>
                            <h3>West Bengal Kolkata</h3>
                            <div>
                                <Link to='/' className={styles.btn}>Explore Projects</Link>
                            </div>
                        </div>
                    </div>
                    <h1 className={styles.heading}>Projects Done By Students</h1>
                    <div className={styles.projectList}>
                        {post.map(pos=><div className={styles.project}>
                            <Project post={pos} key={pos.id}/>
                        </div>)}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CollegeProfile
