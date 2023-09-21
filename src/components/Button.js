import styles from './Button.module.css'
import { Link } from 'react-router-dom'

export default function Button({path,children,disabled=false}){
    return(
        <Link to={path} className={disabled?styles.btnDis:styles.btn}>{children}</Link>
    )
}