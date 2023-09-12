import Button from "./Button"
import Button2 from "./Button2"

export default function Bookmark(){
    return(
        <div className="bookmark">
            <h2>Bookmarks</h2>
            <ul>
                <li>Pothole detection using ML</li>
                <li>Food Donation Platform</li>
                <li>Acciassist</li>
                <li>Decentralised record management system</li>
            </ul>
            <Button2>See all</Button2>
        </div>
    )
}