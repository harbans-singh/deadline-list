import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import DateObject from "react-date-object";
import Button from '@material-ui/core/Button';

const DeadlineDetail = (props) => {

    const deadline = props.deadline;
    
    return (
        <div className="deadline-detail-container">
            <div className="deadline-detail">
                <div className="deadline-detail-title">
                    {deadline && deadline.title}
                </div>
                <div className="deadline-detail-body">
                    <p>{deadline && deadline.detail}</p>
                </div>
                <div className="deadline-detail-footer">
                    <div className="deadline-detail-date">
                        {deadline && ("Added on: " + (new DateObject(deadline.createdAt.seconds * 1000)).format("DD MMMM YYYY"))}
                    </div>
                    <div className="deadline-detail-time">
                        {deadline && ("At: " + (new DateObject(deadline.createdAt.seconds * 1000)).format("hh:mm a"))}
                    </div>
                    <div className="deadline-detail-delete-btn">
                        <Button
                        variant="contained"
                        color="primary">
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const loc = window.location.pathname;
    var deadlineid = loc.substr(loc.lastIndexOf('/') + 1);
    const deadlines = state.firestore.data.deadlines;
    const deadline = deadlines ? deadlines[deadlineid] : null
    return {
        deadline: deadline
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        { collection: "deadlines" }
    ])
)(DeadlineDetail);