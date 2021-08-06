import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../../actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    initials: {
        backgroundColor: "#f72d5c",
        color: "white",
        padding: "0.8em",
        borderRadius: "2em",
        marginLeft: "0.7em",
        minWidth: "1.4em",
        minHeight: "1.5em"
    },
    initials600px: {
        backgroundColor: "#f72d5c",
        color: "white",
        padding: "0.6em",
        borderRadius: "2em",
        marginLeft: "0.7em",
        minWidth: "1.4em",
        minHeight: "1.5em"
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