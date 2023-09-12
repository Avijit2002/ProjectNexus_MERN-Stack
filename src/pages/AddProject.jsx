import Card from "../components/Card"
import Header from "../components/Header"
import AddProjectForm from "../components/AddProjectForm"

function AddProject() {
    return (
        <div className="pages">
            <Header />
            <div className="main" style={{marginTop: '1.8rem'}}>
                <Card>
                    <AddProjectForm />
                </Card>
            </div>
        </div>
    )
}

export default AddProject
