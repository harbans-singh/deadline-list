import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../../actions/authActions";

const SignedInLinks = (props) => {
    return (
        <div className="signed-in-links">
            <Link to="/">Home</Link>
            <Link to="/addDeadline">Add Deadline</Link>
            <Link to="/signin" onClick={props.signOut}>Log Out</Link>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);