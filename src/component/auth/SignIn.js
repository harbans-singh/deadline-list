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

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        console.log("Sign In Mounted");
    }

    componentWillUnmount() {
        console.log("Sign In Unmounted");
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
                    }}>Sign In</div>

                    <TextField
                        className={classes.field}
                        id="outlined-basic"
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
                        onClick={() => console.log("Sign In Button Clicked")}
                        endIcon={<KeyboardArrowRightIcon />}>
                        SIGN IN
                    </Button>
                </form>
            </Container>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SignIn);