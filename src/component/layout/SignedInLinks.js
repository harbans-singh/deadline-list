import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../../actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    initials: {
        backgroundColor: "#10e3bc",
        color: "#1f2a3d",
        padding: "0.8em",
        borderRadius: "2em",
        marginLeft: "0.7em",
        minWidth: "1.4em",
        minHeight: "1.5em",
        textAlign: "center"
    },
    initials600px: {
        backgroundColor: "#10e3bc",
        color: "#1f2a3d",
        padding: "0.6em",
        borderRadius: "2em",
        marginLeft: "0.7em",
        minWidth: "1.4em",
        minHeight: "1.5em",
        textAlign: "center"
    }
})

const SignedInLinks = (props) => {
    const classes = useStyles();
    const { profile } = props;
    const isActive = useMediaQuery('(min-width: 600px)')
    return (
        <div className="signed-in-links">
            <Link to="/">Home</Link>
            <Link to="/addDeadline">Add Deadline</Link>
            <Link to="/signin" onClick={props.signOut}>Log Out</Link>
            {isActive && (<div className={classes.initials}>{ profile && profile.initials}</div>)}
            {!isActive && (<div className={classes.initials600px}>{ profile && profile.initials}</div>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);