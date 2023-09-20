import styles from './AddProjectForm.module.css'
import Backbtn from './Backbtn'
import { useState } from 'react';
import Button from './Button'

function AddProjectForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        category: '',
        tags: '',
        mentor:'',
        github:'',
        file: null,
        isCompleted: false,
        isOpenForCollaboration: false,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileChange = (e) => {
        setFormData({
          ...formData,
          file: e.target.files[0],
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to server or handle as needed
        console.log(formData);
      };
    
      return (
        <>
        <Backbtn path="/"/>
        <div className={styles.uploadForm}>
          <h2>Upload Project</h2>
          <div className={styles.fields}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Other Authors</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Mentors</label>
              <input
                type="text"
                name="mentor"
                value={formData.mentor}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup2}>
              <label>Project Images</label>
              <input
                type="file"
                accept=".jpg"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Github Link</label>
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup2}>
              <label>Is Completed</label>
              <input
                type="checkbox"
                name="isCompleted"
                checked={formData.isCompleted}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup2}>
              <label>Is Open for Collaboration</label>
              <input
                type="checkbox"
                name="isOpenForCollaboration"
                checked={formData.isOpenForCollaboration}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.btn}>
            <Button type="submit">Apply for verification</Button></div>
          </form></div>
        </div></>
      );
}

export default AddProjectForm
