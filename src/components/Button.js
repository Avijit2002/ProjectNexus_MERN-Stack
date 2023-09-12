import styles from './Button.module.css'
import { Link } from 'react-router-dom'

export default function Button({path,children}){
    return(
        <Link to={path} className={styles.btn}>{children}</Link>
    )
}