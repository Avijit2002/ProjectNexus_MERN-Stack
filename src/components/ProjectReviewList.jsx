import styles from './ProjectReviewList.module.css'
import Button2 from './Button2'

function ProjectReviewList() {
    return (
        <ul className={styles.list}>
            <li>
                <h3>Project Name</h3>
                <p>Status: Under Review🟡</p>
            </li>
            <li>
                <h3>Project Name</h3>
                <p>Status: Under Review🟡</p>
            </li>
        </ul>
    )
}

export default ProjectReviewList
