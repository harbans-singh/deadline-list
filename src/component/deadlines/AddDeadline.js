import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { connect } from "react-redux"
import { addDeadline } from '../../actions/deadlineActions';
import { TimePicker, DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "date-fns";
import { Redirect } from "react-router-dom";
import { useState } from "react"
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
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
    },
    overrides: {
        // MuiPickersToolbar: {
        //     toolbar: {
        //         backgroundColor: "#293852",
        //     },
        // },
        // MuiPickersCalendarHeader: {
        //     switchHeader: {
        //         backgroundColor: "red",
        //         color: "white",
        //     },
        // },
        MuiPickersDay: {
            day: {
                color: "black",
            },
            // daySelected: {
            //     backgroundColor: "#436185",
            //     '&:hover': {
            //         backgroundColor: '#293852'
            //     }
            // },
            dayDisabled: {
                color: "lightgrey",
            },
            current: {
                color: "#4d71a1",
            }
        },
    },
})

// const materialTheme = createTheme({
//     overrides: {
//         MuiPickersToolbar: {
//             toolbar: {
//                 backgroundColor: "#293852",
//             },
//         },
//         // MuiPickersCalendarHeader: {
//         //     switchHeader: {
//         //         backgroundColor: "red",
//         //         color: "white",
//         //     },
//         // },
//         MuiPickersDay: {
//             day: {
//                 color: "black",
//             },
//             // daySelected: {
//             //     backgroundColor: "#436185",
//             //     '&:hover': {
//             //         backgroundColor: '#293852'
//             //     }
//             // },
//             dayDisabled: {
//                 color: "lightgrey",
//             },
//             current: {
//                 color: "red",
//             }
//         },
//     },
// });

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#4d71a1',
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

const AddDeadline = ({ uid, addDeadline }) => {

    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [date, setDate] = useState(new Date());

    const [titleError, setTitleError] = useState(false);

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "") {
            setTitleError(true);
            toast.error("Title required", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            const deadline = { title, detail, date };
            addDeadline(deadline);
            history.push("/");
        }
    }

    const handleDate = (date) => {
        setDate(date);
    };

    const classes = useStyles();
    if (!uid) return <Redirect to="/signin" />
    return (
        <Container maxWidth='sm'>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form className="container" noValidate autoComplete="off" style={{
                        padding: "1em"
                    }}>
                        <div id="head" className="head" style={{
                            backgroundColor: "#4d71a1",
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
                            error={titleError}
                            fullWidth
                            required
                            onChange={(e) => setTitle(e.target.value)} />

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
                            onChange={(e) => setDetail(e.target.value)} />

                        <DatePicker
                            className={classes.field}
                            label="Date"
                            value={date}
                            // variant="static"
                            onChange={handleDate}
                            fullWidth
                            variant="dialog"
                            inputVariant="outlined"
                            format="dd MMMM yyyy"
                            minDate={new Date()}
                            helperText="Initially set to today's date"
                            required
                            openTo="date" />

                        <TimePicker
                            className={classes.field}
                            label="Time"
                            value={date}
                            onChange={handleDate}
                            fullWidth
                            variant="dialog"
                            inputVariant="outlined"
                            format="hh:mm a"
                            helperText="Initially set to current time"
                            required />

                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                            onClick={handleSubmit}
                            endIcon={<KeyboardArrowRightIcon />}>
                            ADD
                        </Button>
                    </form>
                </MuiPickersUtilsProvider>
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
        addDeadline: deadline => dispatch(addDeadline(deadline))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeadline);