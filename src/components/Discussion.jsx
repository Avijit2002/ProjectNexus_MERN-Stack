import styles from './Discussion.module.css'
import Card from './Card'
import Button from './Button'

function Discussion({comments}) {
    return (
        <div className={styles.discuss}>
            <div className={styles.msg}>
                {comments.map((msg)=><div key={msg.id} className={msg.isAuthor? styles.author2:styles.author}>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUxFhQ5C1Oarfng10QvkCiCnI8HTcvzj8BhqEHQrvVg&s" alt="icon" />
                    <p><span>{msg.author}:</span></p>
                    <p>{msg.comment}</p>
                </div> )}
                
            </div>
            <div className={styles.send}>
                <input type="text" placeholder='Feel free to reply!!!'/>
                <Button>Send</Button>
            </div>
            
        </div>
    )
}

export default Discussion
