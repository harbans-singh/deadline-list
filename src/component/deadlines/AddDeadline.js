import { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { connect } from "react-redux"
import { addDeadline } from '../../actions/deadlineActions';
import { compose } from 'redux';
import { TimePicker, DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "date-fns";
import { Redirect } from "react-router-dom";

const styles = () => ({
    btn: {
        backgroundColor: '#436185',
        '&:hover': {
            backgroundColor: '#293852'
        }
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

class AddDeadline extends Component {
    state = {
        title: "",
        detail: "",
        date: new Date()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDeadline(this.state);
    }

    handleDate = (date) => {
        this.setState({
            date: date
        });
    };

    render() {
        const { classes, uid } = this.props;
        if(!uid) return <Redirect to="/signin" />
        console.log(this.props);
        return (
            <Container maxWidth='sm'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form className="container" noValidate autoComplete="off" style={{
                        padding: "1em",
                    }}>
                        <div id="head" className="head" style={{
                            backgroundColor: "#436185",
                            margin: "20px auto",
                            boxSizing: "border-box",
                            padding: "10px 15px 10px 15px",
                            borderRadius: "5px",
                            color: "white",
                            fontSize: "1.2em"
                        }}>Add New Deadline</div>

                        <TextField
                            className={classes.field}
                            id="title"
                            label="Title"
                            type="text"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={this.handleChange} />

                        <TextField
                            className={classes.field}
                            id="detail"
                            type="text"
                            label="Detail"
                            autoComplete="current-password"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            onChange={this.handleChange} />

                        <DatePicker
                            className={classes.field}
                            label="Date"
                            value={this.state.date}
                            onChange={this.handleDate}
                            fullWidth
                            variant="dialog"
                            inputVariant="outlined"
                            format="dd MMMM yyyy"
                            minDate={new Date()}
                            required
                            openTo="date" />

                        <TimePicker
                            className={classes.field}
                            label="Time"
                            value={this.state.date}
                            onChange={this.handleDate}
                            fullWidth
                            variant="dialog"
                            inputVariant="outlined"
                            format="hh:mm a"
                            required />

                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                            onClick={this.handleSubmit}
                            endIcon={<KeyboardArrowRightIcon />}>
                            ADD
                        </Button>
                    </form>
                </MuiPickersUtilsProvider>
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
        addDeadline: deadline => dispatch(addDeadline(deadline))
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(AddDeadline);