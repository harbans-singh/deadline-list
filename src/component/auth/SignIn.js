import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useState } from "react"
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from "@material-ui/core";

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
        }
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        backgroundColor: 'white',
        borderRadius: '5px'
    }
})

const SignIn = ({ uid, signIn }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        if (email === "" || password === "") {
            if (email === "") {
                setEmailError(true);
            }
            if (password === "") {
                setPasswordError(true);
            }
            toast.error("Enter valid information", {
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
            const credentials = { email, password }
            signIn(credentials);
        }
    }


    const classes = useStyles();
    if (uid) return <Redirect to="/" />

    return (
        <Container maxWidth='sm'>
            <ThemeProvider theme={theme}>
                <form className="container" noValidate style={{
                    padding: "1em"
                }} >
                    <div className="head" style={{
                        backgroundColor: "#4d71a1",
                        margin: "20px auto",
                        boxSizing: "border-box",
                        padding: "10px 15px 10px 15px",
                        borderRadius: "5px",
                        color: "white",
                        fontSize: "1.2em"
                    }}>Sign In</div>

                    <TextField
                        className={classes.field}
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        error={emailError}
                        fullWidth
                        required
                        onChange={(e) => setEmail(e.target.value)} />

                    <TextField
                        className={classes.field}
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        error={passwordError}
                        fullWidth
                        required
                        onChange={(e) => setPassword(e.target.value)} />

                    <Button
                        className={classes.btn}
                        variant="contained"
                        onClick={handleSubmit}
                        endIcon={<KeyboardArrowRightIcon />}>
                        SIGN IN
                    </Button>
                    <div className="forgot-link">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                </form>
            </ThemeProvider>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);