import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => {
    return {
        navbar: {
            backgroundColor: '#293852',
            color: 'white',
        },
        title: {
            flexGrow: 1,
            fontSize: '1.5em'
        }
    }
})

const Navbar = (props) => {
    const classes = useStyles();
    const { uid } = props;
    const links = uid ? <SignedInLinks /> : <SignedOutLinks />
    
    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography className={classes.title} component={'span'}>
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>Deadlines</Link>
                </Typography>
                <Typography component={'span'}>
                    {links}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

export default connect(mapStateToProps)(Navbar);