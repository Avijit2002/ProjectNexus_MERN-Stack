
import styles from './ProjectVerifyForm.module.css'
import Backbtn from './Backbtn'
import Button from './Button'
function ProjectVerifyForm({data}) {
    return (
        <>
        <Backbtn path="/"/>
        <div className={styles.uploadForm}>
          <h2>Verify Project</h2>
          <div className={styles.fields}>
          <form>
            <div className={styles.formGroup}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={data.title}
                required
                disabled
              />
            </div>
            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea
                name="description"
                value={data.description}
                required
                disabled
                rows={10}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Other Authors</label>
              <input
                type="text"
                name="author"
                value={data.author}
                required
                disabled
              />
            </div>
            <div className={styles.formGroup}>
              <label>Mentors</label>
              <input
                type="text"
                name="mentor"
                required
                disabled
              />
            </div>
            <div className={styles.formGroup}>
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={data.category}
                required
                disabled
              />
            </div>
            <div className={styles.formGroup}>
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                required
                disabled
                value={data.tags[0]}
              />
            </div>
            <div className={styles.formGroup2}>
              <label>Project Images</label>
              <img src={data.image} alt="" />
            </div>
            <div className={styles.formGroup}>
              <label>Github Link</label>
              <input
                type="text"
                name="github"
                value="www.github/chatbot.com"
                required
                disabled
              />
            </div>
            <div className={styles.formGroup2}>
              <label>Is Completed</label>
              <input
                type="checkbox"
                name="isCompleted"
                checked={data.isCompleted}
                disabled
              />
            </div>
            <div className={styles.formGroup2}>
              <label>Is Open for Collaboration</label>
              <input
                type="checkbox"
                name="isOpenForCollaboration"
                checked={data.isOpenForCollaboration}
                disabled
              />
            </div>
            
          </form></div>
        </div></>
      );
}

export default ProjectVerifyForm
