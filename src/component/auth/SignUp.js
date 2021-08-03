import { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const styles = (theme) => ({
    btn: {
        backgroundColor: '#e53935',
        '&:hover' : {
            backgroundColor: '#b71c1c'
        }
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

class SignUp extends Component {
    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        console.log("Sign Up Mounted");
    }

    componentWillUnmount() {
        console.log("Sign Up Unmounted");
    }

    render() {
        const { classes } = this.props;
        return (
            <Container maxWidth='sm'>
                <form className="container" noValidate autoComplete="off" style={{
                    padding: "1em"
                }}>
                <div className="head" style={{
                        backgroundColor: "#e53935",
                        margin: "20px auto",
                        boxSizing: "border-box",
                        padding: "10px 15px 10px 15px",
                        borderRadius: "5px",
                        color: "white",
                        fontSize: "1.2rem"
                    }}>Sign Up</div>

                    <TextField
                        className={classes.field}
                        id="signup-firstname"
                        label="First Name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required />
                    
                    <TextField
                        className={classes.field}
                        id="signup-lastname"
                        label="Last Name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required />
                    
                    <TextField
                        className={classes.field}
                        id="signup-email"
                        label="Email"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required />

                    <TextField
                        className={classes.field}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        fullWidth
                        required />

                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="secondary"
                        onClick={() => console.log("Sign Up Button Clicked")}
                        endIcon={<KeyboardArrowRightIcon />}>
                        SIGN UP
                    </Button>
                </form>
            </Container>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SignUp);