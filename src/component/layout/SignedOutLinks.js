import { Link } from "react-router-dom"

const SignedOutLinks = () => {
    return (
        <div className="signed-out-links">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}
 
export default SignedOutLinks;