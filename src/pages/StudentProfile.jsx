import Header from "../components/Header"
import Backbtn from "../components/Backbtn"
import Card from "../components/Card"
import styles from './StudentProfile.module.css'
import Button2 from "../components/Button2"
import YourProjectList from "../components/YourProjectList"
import ProjectReviewList from "../components/ProjectReviewList"

function StudentProfile() {
    return (
        <div className="pages">
            <Header />
            <Backbtn path="/"/>
            <div className={styles.main}>
                <div>
                    <Card>
                        <h2>Profile Details</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUxFhQ5C1Oarfng10QvkCiCnI8HTcvzj8BhqEHQrvVg&s" alt="" />
                        <div className={styles.firstcol}>
                            <p>Name: Avijit Ram</p>
                            <p>College: Techno International New town</p>
                            <p>Description: Full Stack Developer</p>
                            <p>Rating: 3⭐</p>
                            <p>Total Projects Uploaded:</p>
                            <p>Projects Under Review:</p>
                            <p>Projects in collaboration:</p>
                            <Button2>Edit Info</Button2>
                        </div>
                    </Card>
                </div>
                <div className='scroll-div' style={{height:'95%%',overflowY:'scroll'}}>
                    <Card>
                        <h2>Manage Your Projects</h2>
                        <YourProjectList />
                    </Card>
                </div>
                <div>
                    <Card>
                        <h2>Projects Under Review</h2>
                        <ProjectReviewList />
                    </Card>
                    <Card>
                        <h2>Collaboration</h2>
                        <div className={styles.colab}>
                            <p>No projects under Collaboration</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile
