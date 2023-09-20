import styles from "./Header.module.css"
function AdminNav() {
    return (
        <div>
            <header className={styles.header}>
        <div className={styles.logo}>
          <h2>The Project Portal</h2>
        </div>
        <h1>XYZ College-Admin Portal</h1>
        <a href="">Log Out</a>
      </header>
        </div>
    )
}

export default AdminNav
