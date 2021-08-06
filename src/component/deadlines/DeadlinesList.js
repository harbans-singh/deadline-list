import Timer from '../timer/Timer';
import { Link } from 'react-router-dom';
import DateObject from "react-date-object";

import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';

const DeadlineList = ({ deadlines }) => {

        return (
            <div className="dashboard">
                {deadlines && deadlines.map((deadline) => (
                    <Link to={`/deadline/${deadline.id}`} key={deadline.id}>
                        <div className="dashboard-container">
                            <div className="deadline-title"> {deadline.title} </div>
                            <Timer date={new DateObject(deadline.date.seconds * 1000)} />
                        </div>
                    </Link>
                ))}
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        deadlines: state.firestore.ordered.deadlines,
        uid: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(ownProps => [
        {
            collection: "deadlines",
            where: ["authorId", "==", ownProps.uid],
            orderBy: ['date', 'asc']
        }
    ])
)(DeadlineList);