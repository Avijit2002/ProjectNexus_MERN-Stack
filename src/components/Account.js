import styles from './Account.module.css'
import Button from "./Button"
import Button2 from "./Button2"
export default function Account(){
    return(
        <div className={styles.account}>
            <div className={styles.color}></div>
            <div className={styles.content}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUxFhQ5C1Oarfng10QvkCiCnI8HTcvzj8BhqEHQrvVg&s" alt="" />
                <h3>Avijit Ram</h3>
                <p>3rd year btech CSE Student || Full Stack Developer || B.Tech'25</p>
                <Button2 path='/student-profile'>Profile</Button2>

            </div>
        </div>
        
        // <>
        //   <img src="" alt="dp" />
        //   <h3>Name</h3>
        //   <p>Rating</p>
        //   <Button>Your Account</Button>
        // </>
    )
}