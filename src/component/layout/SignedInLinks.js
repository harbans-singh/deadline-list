import { Link } from "react-router-dom"

const SignedInLinks = () => {
    return (
        <div className="signed-in-links">
            <Link to="/">Home</Link>
            <Link to="/addDeadline">Add Deadline</Link>
            <Link to="/">Log Out</Link>
        </div>
    );
}
 
export default SignedInLinks;