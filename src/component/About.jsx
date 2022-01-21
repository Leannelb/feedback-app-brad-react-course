import Card from '../shared/Card';
import { Link} from "react-router-dom";
  
function About() {
    return (
        <Card>
            <div className="about">
                <h1>About</h1>
                <p>This is a react app to add feedback about a product or service</p>
                <p>Version 1.0.0</p>
                
                <p>
                <Link to='/'>Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default About
