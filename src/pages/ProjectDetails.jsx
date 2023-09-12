import Card from "../components/Card"
import Header from "../components/Header"
import Backbtn from "../components/Backbtn"
import styles from './ProjectDetails.module.css'
import Button2 from "../components/Button2"
import { useParams } from "react-router-dom"

function ProjectDetails({post}) {
    const x = useParams();
    const id = Number(x.id)
    // console.log(id)
    // console.log(post[0].id)
    //console.log(id)
    //console.log(post.at(id-1))
    //console.log(id===post[0].id)
    const project = post.find((y)=> y.id===id);
    //console.log(project)
    return (
        <div className="pages">
            <Header />
            <Backbtn path="/"/>
            <div className={styles.main}>
                <div className='scroll-div' style={{height:'95%',overflowY:'scroll'}}>
                    <Card>
                        <div className={styles.project}>
                            <h2>{project.title}</h2>
                            <div className={styles.heading}>
                                <div className={styles.heade}>
                                    <h3>Domain: {project.category}</h3>
                                    <h3>Tech Stack : X, Y ,Z</h3>
                                </div>
                                <div className={styles.head}>
                                    <p>Uploaded on: {project.uploadDate}</p>
                                    <Button2>{project.likes} Upvote</Button2>
                                </div>
                            </div>
                            <img src={project.image} alt="project pic" />
                            <p>{project.description}
                            </p>
                            <Button2>Github Link</Button2>
                        </div>
                    </Card>
                </div>
                <div style={{height:'82%'}}>
                    <Card>
                        <div className={styles.author}>
                            <h2>Author Details</h2>
                            <ul>
                                <li><h3>{project.author} - <span>{project.university}</span></h3></li>
                                <li><h3>Atulya Narayan - <span>Techno International New Town</span></h3></li>
                            </ul>
                            <h3>Verified by - Techno International New Town</h3>
                        </div>
                    </Card>
                    <Card>
                        <h2>Discussion Forum</h2>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
