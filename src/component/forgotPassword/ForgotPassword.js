import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useState } from "react"
import { createTheme, ThemeProvider } from "@material-ui/core";
import { connect } from "react-redux"
import { forgotPassword } from '../../actions/authActions';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const theme = createTheme({
    palette: {
        primary: {
            light: "#4d71a1",
            main: "#4d71a1",
            dark: "#4d71a1"
        }
    },
    typography: {
        fontFamily: "Ubuntu",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    }
})

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#4d71a1',
        color: 'white',
        '&:hover': {
            backgroundColor: '#2f4e78'
        },
    },
    field: {
        marginTop: 60,
        marginBottom: 40,
        display: 'block',
        backgroundColor: 'white',
        borderRadius: '5px'
    },
    backtosignin: {
        alignItems: "center",
        textAlign: "center",
        marginTop: 20,
        fontSize: "0.9em",
        ['@media (max-width:600px)']: {
            fontSize: "0.8em"
        }
    },
    backtosigninlink: {
        textDecoration: "none",
        color: "#0645AD",
        "&:active": {
            color: "#0B0080"
        }
    }
})

const ForgotPassword = ({ forgotPassword }) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(false);
        if (email === "") {
            setEmailError(true);
            toast.error("Email required !", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            forgotPassword(email);
            // history.push("/");
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="forgotpassword-container">
                <div className="forgotpassword-header">
                    Forgot Your Password?
                </div>
                <p>Don't Worry!<br />Enter the email you used while sign up and you'll receive an email to set new password.</p>
                <TextField
                    className={classes.field}
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    fullWidth />
                <div className="button-alignment">
                    <Button
                        variant="contained"
                        className={classes.btn}
                        fullWidth
                        onClick={handleSubmit} >
                        Reset Password
                    </Button>
                </div>
                <div className={classes.backtosignin}>
                    <Link to="/signin" className={classes.backtosigninlink}>Back to sign in</Link>
                </div>
            </div>
        </ThemeProvider>
    );
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        forgotPassword: email => dispatch(forgotPassword(email))
    }
}

export default connect(null, mapDispatchToProps)(ForgotPassword);