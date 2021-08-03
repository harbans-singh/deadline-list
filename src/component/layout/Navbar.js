import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';

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

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography className={classes.title} component={'span'}>
                    <Link to="/" style={{color: "white", textDecoration: "none"}}>Deadlines</Link>
                </Typography>
                <Typography component={'span'}>
                    <SignedInLinks />
                </Typography>
                <Typography component={'span'}>
                    <SignedOutLinks />
                </Typography>
            </Toolbar>
            {/* <div className="navbar"> */}
                {/* <div className="nav-head"><h2><Link to="/">All your  deadlines in one place</Link></h2></div> */}
                {/* <div className="nav-links"> */}
                    {/* <SignedInLinks /> */}
                    {/* <SignedOutLinks /> */}
                {/* </div> */}
            {/* </div> */}
        </AppBar>
    );
}

export default Navbar;