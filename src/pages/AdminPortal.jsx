import AdminNav from "../components/AdminNav"
import styles from "./AdminPortal.module.css"
import Card from "../components/Card"
import Button2 from "../components/Button2"
function AdminPortal() {
    return (
        <div className={styles.pages}>
            <AdminNav />
            <div className={styles.main}>
                <Card>
                    <h3>Update Profile</h3>
                    <div className={styles.content}>
                        <p>Change Public info</p>
                        <Button2>Update</Button2>
                    </div>
                </Card>
                <Card>
                    <h3>Verify Projects</h3>
                    <div className={styles.content}>
                        <p>Verify Request Count:X</p>
                        <Button2 path="/admin-verify">List</Button2>
                    </div>
                </Card>
                <Card>
                    <h3>Add Project</h3>
                    <div className={styles.content}>
                        <p>Add Project done in this college</p>
                        <Button2 path="/admin-add-project">Add</Button2>
                    </div>
                </Card>
                <Card>
                    <h3>Manage Projects</h3>
                    <div className={styles.content}>
                        <p>Total Project Count:X</p>
                        <Button2>Manage</Button2>
                    </div>
                </Card>
                <Card>
                    <h3>Manage Students</h3>
                    <div className={styles.content}>
                        <p>Manage Students of this college</p>
                        <Button2>Manage</Button2>
                    </div>
                </Card>
                <Card>
                    <h3>Change Password</h3>
                    <div className={styles.content}>
                        <p>Set new password</p>
                        <Button2>Change</Button2>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AdminPortal
