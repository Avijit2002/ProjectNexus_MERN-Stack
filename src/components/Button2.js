import styles from './Button2.module.css'
import { Link } from 'react-router-dom'

export default function Button2({path,children}){
    return(
        <Link to={path} className={styles.btn}>{children}</Link>
    )
}