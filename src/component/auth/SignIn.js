import { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { compose } from "redux";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

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

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state) 
    }

    render() {
        const { classes, uid } = this.props;
        if(uid) return <Redirect to="/" />
        return (
            <Container maxWidth='sm'>
                <form className="container" noValidate autoComplete="off" style={{
                    padding: "1em"
                }} >
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
                        id="email"
                        label="Email"
                        type="text"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={this.handleChange} />

                    <TextField
                        className={classes.field}
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={this.handleChange} />

                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="secondary"
                        onClick={ this.handleSubmit }
                        endIcon={<KeyboardArrowRightIcon />}>
                        SIGN IN
                    </Button>
                </form>
            </Container>
        )
    }
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

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(SignIn);