import styles from './YourProjectList.module.css'
import Button2 from './Button2'
function YourProjectList() {
    return (
        <ul className={styles.list}>
            <li>
                <h3>Project Name</h3>
                <Button2>Settings</Button2>
                <div>
                    <p>Collaborators: avijit,atulya</p>
                    <p>Uploaded on: 16 june 2023</p>
                </div>
                
                <Button2>Details</Button2>
                <div>
                    <p>Status: Completed🟢</p>
                    <p>Reach: global🌐</p>
                </div>
                <Button2>Modify</Button2>
            </li>
            <li>
                <h3>Project Name</h3>
                <Button2>Settings</Button2>
                <div>
                    <p>Collaborators: avijit,atulya</p>
                    <p>Uploaded on: 16 june 2023</p>
                </div>
                
                <Button2>Details</Button2>
                <div>
                    <span>Status: Completed🟢</span>
                    <p>Reach: global🌐</p>
                </div>
                
                <Button2>Modify</Button2>
            </li>
            <li>
                <h3>Project Name</h3>
                <Button2>Settings</Button2>
                <div>
                    <p>Collaborators: avijit,atulya</p>
                    <p>Uploaded on: 16 june 2023</p>
                </div>
                
                <Button2>Details</Button2>
                <span>Status: 🟢Completed</span>
                <Button2>Modify</Button2>
            </li>
            <li>
                <h3>Project Name</h3>
                <Button2>Settings</Button2>
                <div>
                    <p>Collaborators: avijit,atulya</p>
                    <p>Uploaded on: 16 june 2023</p>
                </div>
                
                <Button2>Details</Button2>
                <span>Status: 🟢Completed</span>
                <Button2>Modify</Button2>
            </li>
        </ul>
    )
}

export default YourProjectList
