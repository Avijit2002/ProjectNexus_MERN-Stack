import Button from "./Button"
import Button2 from "./Button2"
import { Link } from "react-router-dom"

export default function Addproject(){
    return(
        <div className="add-project-section">
            <p>Hey Avijit!!! Feel free to share your projects and ideas😇</p>
            <Button2 path="/add-project">Add Project</Button2>
        </div>
    )
}