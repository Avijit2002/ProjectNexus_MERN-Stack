
import Button from "./Button"
import Button2 from "./Button2"
export default function Myprojects(){
    return(
        <div className="project-stats">
          <h2>Your Stats</h2>
          <ul>
            <li>
              <p>Your Project: X</p>
              <Button2>Check</Button2>
            </li>
            <li>
              <p>Under Review: X</p>
              <Button2>Check</Button2>
            </li>
          </ul>
        </div>
    )
}