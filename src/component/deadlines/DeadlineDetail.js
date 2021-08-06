import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import DateObject from "react-date-object";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { removeDeadline } from "../../actions/deadlineActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#436185',
        marginTop: 20,
        color: "white",
        '&:hover': {
            backgroundColor: '#293852'
        }
    }
})


const DeadlineDetail = ({deadlines, uid, removeDeadline}) => {
    let history = useHistory();

    const classes = useStyles();
    if (!uid) return <Redirect to="/signin" />

    const handleDelete = (deadline) => {
        removeDeadline(deadline);
        history.push("/");
    }    
    if(deadlines) {
        const loc = window.location.pathname;
        var deadlineid = loc.substr(loc.lastIndexOf('/') + 1);
        const matcheddeadline = (deadlines.filter(deadline => deadline.authorId === uid));
        const finalmatcheddeadline = (matcheddeadline.filter(deadline => deadline.id === deadlineid));
        return (
            <div className="deadline-detail-container">
                <div className="deadline-detail">
                    <div className="deadline-detail-title">
                        {finalmatcheddeadline[0].title}
                    </div>
                    <div className="deadline-detail-body">
                        <p>{finalmatcheddeadline[0].detail}</p>
                    </div>
                    <div className="deadline-detail-footer">
                        <div className="deadline-detail-date">
                            {"Added on: " + (new DateObject(finalmatcheddeadline[0].createdAt.seconds * 1000)).format("DD MMMM YYYY")}
                        </div>
                        <div className="deadline-detail-time">
                            {"At: " + (new DateObject(finalmatcheddeadline[0].createdAt.seconds * 1000)).format("hh:mm a")}
                        </div>
                        <div className="deadline-detail-delete-btn">
                            <Button
                                className={classes.btn}
                                variant="contained"
                                onClick={() => handleDelete(finalmatcheddeadline[0])}>
                                DELETE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // if (deadline) {
    //     return (
    //         <div className="deadline-detail-container">
    //             <div className="deadline-detail">
    //                 <div className="deadline-detail-title">
    //                     {deadline.title}
    //                 </div>
    //                 <div className="deadline-detail-body">
    //                     <p>{deadline.detail}</p>
    //                 </div>
    //                 <div className="deadline-detail-footer">
    //                     <div className="deadline-detail-date">
    //                         {"Added on: " + (new DateObject(deadline.createdAt.seconds * 1000)).format("DD MMMM YYYY")}
    //                     </div>
    //                     <div className="deadline-detail-time">
    //                         {"At: " + (new DateObject(deadline.createdAt.seconds * 1000)).format("hh:mm a")}
    //                     </div>
    //                     <div className="deadline-detail-delete-btn">
    //                         <Button
    //                             className={classes.btn}
    //                             variant="contained"
    //                             onClick={() => handleDelete(deadline)}>
    //                             DELETE
    //                         </Button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    else {
        return (
            <div className="deadline-detail-container">
                <div style={{
                    textAlign: "center"
                }}><CircularProgress /></div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    // const loc = window.location.pathname;
    // var deadlineid = loc.substr(loc.lastIndexOf('/') + 1);
    // const deadlines = state.firestore.data.deadlines;
    // const deadline = deadlines ? deadlines[deadlineid] : null
    return {
        // deadline: deadline,
        deadlines: state.firestore.ordered.deadlines,
        uid: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeDeadline: (deadline) => dispatch(removeDeadline(deadline))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((ownProps) => [
        { collection: "deadlines" }
    ])
)(DeadlineDetail);