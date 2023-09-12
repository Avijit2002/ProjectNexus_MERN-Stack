import styles from './Backbtn.module.css'
import { Link } from 'react-router-dom'
function Backbtn({path}) {
    return (
        <Link to={path} className={styles.arrow}>&larr;</Link>
    )
}

export default Backbtn
