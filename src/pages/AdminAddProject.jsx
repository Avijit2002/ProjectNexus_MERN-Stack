import AdminNav from "../components/AdminNav"
import Card from "../components/Card"
import AddProjectForm from "../components/AddProjectForm"

function AdminAddProject() {
    return (
        <div className="pages">
            <AdminNav />
            <div className="main" style={{marginTop: '1.8rem'}}>
                <Card>
                    <AddProjectForm />
                </Card>
            </div>
        </div>
    )
}

export default AdminAddProject
