import AdminNav from "../components/AdminNav"
import Card from "../components/Card"
import ProjectVerifyForm from "../components/ProjectVerifyForm"
import Button from '../components/Button'
import styles from './VerifyDetailsPage.module.css'
function VerifyDetailsPage({post}) {
    const data = post[3];
    return (
        <div className="pages">
        <AdminNav />
        <div className={styles.main} style={{marginTop: '1.8rem'}}>
            <Card>
                <ProjectVerifyForm data={data}/>
            </Card>
            <div>
            <Card>
                <h2>Check for Plagarism:</h2>
                <div className={styles.plag}>
                    <h3>Plagarism Percent must be below 20%</h3>
                    <Button>Plagarism Check</Button>
                    <Button disabled={true}>Download Report</Button>
                </div>
            </Card>
            <Card>
                <div className={styles.verify}>
                    <h3>Check for plagarism to verify and upload</h3>
                    <Button disabled={true}>Verify And Upload to portal</Button>
                </div>
            </Card>
            </div>
        </div>
    </div>
    )
}

export default VerifyDetailsPage
